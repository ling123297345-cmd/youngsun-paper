import { useCallback, useEffect, useState } from "react";
import { LoaderCircle, ShieldCheck } from "lucide-react";
import { supabase } from "./lib/supabase.js";

const cleanCode = (value) => value.replace(/\D/g, "").slice(0, 6);

async function checkMfa() {
  const [level, factors] = await Promise.all([
    supabase.auth.mfa.getAuthenticatorAssuranceLevel(),
    supabase.auth.mfa.listFactors(),
  ]);
  if (level.error) throw level.error;
  if (factors.error) throw factors.error;
  return {
    required: level.data.nextLevel === "aal2" && level.data.currentLevel !== "aal2",
    factors: factors.data.totp.filter((factor) => factor.status === "verified"),
  };
}

export function MfaGate({ session, children }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setStatus(null);
    setError("");
    checkMfa().then((next) => { if (active) setStatus(next); })
      .catch(() => { if (active) setError("无法确认账号安全状态，请重试；暂未开放后台操作。"); });
    return () => { active = false; };
  }, [session.access_token, retry]);

  const verify = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const factorId = status?.factors[0]?.id;
      if (!factorId) throw new Error("没有可用的验证器，请联系管理员检查验证方式。");
      const result = await supabase.auth.mfa.challengeAndVerify({ factorId, code });
      if (result.error) throw result.error;
      setCode("");
      setRetry((value) => value + 1);
    } catch (verifyError) {
      setError(verifyError.message === "没有可用的验证器，请联系管理员检查验证方式。"
        ? verifyError.message : "验证码未通过，请输入验证器当前显示的 6 位数字后重试。");
    } finally { setBusy(false); }
  };

  if (status && !status.required) return children;
  return (
    <div className="admin-auth-page admin-mfa-gate">
      <form className="admin-auth-panel" onSubmit={verify}>
        <div className="admin-auth-heading"><ShieldCheck size={30} /><h1>二次验证</h1><p>输入手机验证器中的 6 位验证码。</p></div>
        {!status && !error ? <p role="status"><LoaderCircle className="spin" size={18} /> 正在检查账号安全状态...</p> : null}
        {status?.required ? <label className="admin-field">验证码<input aria-label="验证码" value={code} onChange={(event) => setCode(cleanCode(event.target.value))} inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required autoFocus /></label> : null}
        {error ? <p role="alert" className="admin-form-error">{error}</p> : null}
        {status?.required ? <button className="admin-primary-button auth-submit" disabled={busy || code.length !== 6}>验证并进入</button> : null}
        {!status && error ? <button className="admin-primary-button" type="button" onClick={() => setRetry((value) => value + 1)}>重新检查</button> : null}
        <p className="admin-mfa-help">手机丢失时，请联系 Supabase 项目管理员核验身份并恢复验证方式。重置密码不会替代二次验证。</p>
        <button className="admin-secondary-button" type="button" onClick={() => supabase.auth.signOut()}>退出登录</button>
      </form>
    </div>
  );
}

export function MfaSettings() {
  const [enabled, setEnabled] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    try { setEnabled((await checkMfa()).factors.length > 0); }
    catch { setError("暂时无法读取二次验证状态，请稍后重试。"); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const enroll = async () => {
    setBusy(true); setError(""); setMessage("");
    try {
      const result = await supabase.auth.mfa.enroll({ factorType: "totp", friendlyName: `YOUNGSUN ${Date.now()}`, issuer: "YOUNGSUN PAPER" });
      if (result.error) throw result.error;
      setEnrollment(result.data);
    } catch { setError("暂时无法创建验证方式，请稍后重试或联系管理员。"); }
    finally { setBusy(false); }
  };
  const cancel = async () => {
    setBusy(true); setError("");
    try {
      const result = await supabase.auth.mfa.unenroll({ factorId: enrollment.id });
      if (result.error) throw result.error;
      setEnrollment(null); setCode("");
    } catch { setError("取消未完成，请重试。此验证方式尚未启用。"); }
    finally { setBusy(false); }
  };
  const verify = async (event) => {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const result = await supabase.auth.mfa.challengeAndVerify({ factorId: enrollment.id, code });
      if (result.error) throw result.error;
      setEnrollment(null); setCode(""); setEnabled(true);
      setMessage("二次验证已启用。下次登录时需要手机验证器。");
    } catch { setError("验证码未通过，请检查手机时间和当前验证码后重试。"); }
    finally { setBusy(false); }
  };
  const qr = enrollment?.totp?.qr_code;
  return (
    <section className="admin-form-section admin-mfa-settings">
      <h2><ShieldCheck size={22} /> 账号二次验证</h2>
      <p>{enabled === null ? "正在读取状态..." : enabled ? "已启用手机验证器。" : "未启用。建议为管理账号绑定手机验证器。"}</p>
      {!enabled && enabled !== null && !enrollment ? <button type="button" className="admin-primary-button" disabled={busy} onClick={enroll}>设置手机验证器</button> : null}
      {enrollment ? <form onSubmit={verify}>
        <p>请使用验证器 App 扫描二维码，并妥善保存验证器的恢复方式。不要把二维码或密钥发给别人。</p>
        {qr ? <img className="admin-mfa-qr" src={qr.startsWith("data:") ? qr : `data:image/svg+xml;charset=utf-8,${encodeURIComponent(qr)}`} alt="绑定手机验证器的二维码" /> : null}
        <label className="admin-field">验证码<input aria-label="绑定验证码" value={code} onChange={(event) => setCode(cleanCode(event.target.value))} inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required /></label>
        <div className="admin-mfa-actions"><button className="admin-primary-button" disabled={busy || code.length !== 6}>确认启用</button><button type="button" className="admin-secondary-button" disabled={busy} onClick={cancel}>取消设置</button></div>
      </form> : null}
      <p className="admin-mfa-help">请保留 Supabase 项目管理员的独立登录方式。若手机丢失，由项目管理员核验身份后恢复；邮箱重置密码不能跳过验证器。</p>
      {error ? <p role="alert" className="admin-form-error">{error}</p> : null}
      {message ? <p role="status" className="admin-form-success">{message}</p> : null}
    </section>
  );
}
