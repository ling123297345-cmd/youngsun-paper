import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  ExternalLink,
  FileText,
  ImagePlus,
  LayoutDashboard,
  LoaderCircle,
  LogOut,
  Menu,
  Package,
  Pencil,
  Plus,
  RefreshCw,
  Save,
  Search,
  Send,
  Trash2,
  Upload,
  UserRound,
  X,
} from "lucide-react";
import {
  arrayToLines,
  getPublicMediaUrl,
  isSupabaseConfigured,
  linesToArray,
  slugify,
  supabase,
  uploadCmsImage,
} from "../lib/supabase.js";
import "../admin.css";

const OWNER_EMAIL = "ling123297345@gmail.com";

const EMPTY_PRODUCT = {
  id: "",
  slug: "",
  category_slug: "package-board",
  status: "draft",
  sort_order: 0,
  name_en: "",
  name_es: "",
  tagline_en: "",
  tagline_es: "",
  description_en: "",
  description_es: "",
  specs_en: "",
  specs_es: "",
  features_en: "",
  features_es: "",
  applications_en: "",
  applications_es: "",
  variants_en: "",
  variants_es: "",
  moq: "",
  leadTime: "",
  samples: "Free samples; international courier paid by customer",
  certification: "",
  main_image_path: "",
  main_image_alt_en: "",
  main_image_alt_es: "",
  seo_title_en: "",
  seo_title_es: "",
  seo_description_en: "",
  seo_description_es: "",
  published_at: null,
  revision: 0,
};

const EMPTY_POST = {
  id: "",
  slug: "",
  status: "draft",
  title: "",
  excerpt: "",
  content_markdown: "",
  category: "Guides",
  tags: "",
  cover_image_path: "",
  cover_image_alt: "",
  seo_title: "",
  seo_description: "",
  related_product_slugs: "",
  author_name: "YOUNGSUN PAPER Editorial",
  published_at: null,
  revision: 0,
};

function formatDate(value) {
  if (!value) return "尚未发布";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

async function triggerWebsitePublish(contentType, slug) {
  const { error } = await supabase.functions.invoke("trigger-publish", {
    body: { contentType, slug },
  });
  if (error) throw error;
}

function readProduct(row) {
  return {
    ...EMPTY_PRODUCT,
    ...row,
    specs_en: arrayToLines(row.specs_en),
    specs_es: arrayToLines(row.specs_es),
    features_en: arrayToLines(row.features_en),
    features_es: arrayToLines(row.features_es),
    applications_en: arrayToLines(row.applications_en),
    applications_es: arrayToLines(row.applications_es),
    variants_en: arrayToLines(row.variants_en),
    variants_es: arrayToLines(row.variants_es),
    moq: row.commercial_info?.moq || "",
    leadTime: row.commercial_info?.leadTime || "",
    samples: row.commercial_info?.samples || "",
    certification: row.commercial_info?.certification || "",
  };
}

function readPost(row) {
  return {
    ...EMPTY_POST,
    ...row,
    tags: Array.isArray(row.tags) ? row.tags.join(", ") : "",
    related_product_slugs: Array.isArray(row.related_product_slugs)
      ? row.related_product_slugs.join(", ")
      : "",
  };
}

function StatusBadge({ status }) {
  const labels = { draft: "草稿", published: "已发布", archived: "已归档" };
  return <span className={`admin-status status-${status}`}>{labels[status] || status}</span>;
}

function Notice({ notice, onClose }) {
  if (!notice) return null;
  return (
    <div className={`admin-notice ${notice.type || "success"}`} role="status">
      <Check size={18} />
      <span>{notice.message}</span>
      <button type="button" onClick={onClose} aria-label="关闭提示"><X size={17} /></button>
    </div>
  );
}

function Field({ label, hint, required, children, wide = false }) {
  return (
    <label className={`admin-field${wide ? " field-wide" : ""}`}>
      <span>{label}{required ? <b> *</b> : null}</span>
      {children}
      {hint ? <small>{hint}</small> : null}
    </label>
  );
}

function ImageUploader({ value, alt, folder, slug, userId, onUploaded, label = "上传主图" }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const preview = getPublicMediaUrl(value);

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const uploaded = await uploadCmsImage({ file, folder, slug: slug || "draft", userId });
      onUploaded(uploaded.path);
    } catch (uploadError) {
      setError(uploadError.message || "图片上传失败，请重试。");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  return (
    <div className="admin-image-uploader">
      <div className="admin-image-preview">
        {preview ? <img src={preview} alt={alt || "图片预览"} /> : <ImagePlus size={34} />}
      </div>
      <div>
        <label className="admin-upload-button">
          {uploading ? <LoaderCircle className="spin" size={17} /> : <Upload size={17} />}
          {uploading ? "正在优化并上传..." : label}
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} disabled={uploading} />
        </label>
        <p>建议横图，宽度 1600–2400 px。系统自动转为 WebP。</p>
        {error ? <p className="admin-error-text">{error}</p> : null}
      </div>
    </div>
  );
}

function AuthScreen() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState(OWNER_EMAIL);
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      if (mode === "signup") {
        const { error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { display_name: displayName.trim() || email.split("@")[0] },
            emailRedirectTo: `${window.location.origin}/admin/`,
          },
        });
        if (signUpError) throw signUpError;
        setMessage("账号已创建。请检查邮箱完成确认，然后返回这里登录。");
      } else if (mode === "reset") {
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/admin/`,
        });
        if (resetError) throw resetError;
        setMessage("密码重置邮件已发送，请检查收件箱。");
      } else {
        const { error: loginError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (loginError) throw loginError;
      }
    } catch (authError) {
      setError(authError.message === "Invalid login credentials" ? "邮箱或密码不正确。" : authError.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-brand">
        <img src="/images/logo-header.webp" alt="YOUNGSUN PAPER" />
        <p>内容管理后台</p>
      </div>
      <form className="admin-auth-panel" onSubmit={submit}>
        <div className="admin-auth-heading">
          <span>YOUNGSUN CMS</span>
          <h1>{mode === "signup" ? "设置管理员账号" : mode === "reset" ? "重置密码" : "登录后台"}</h1>
          <p>{mode === "signup" ? "首次使用时创建账号。" : mode === "reset" ? "我们会发送安全重置链接。" : "管理产品、文章和网站图片。"}</p>
        </div>
        {mode === "signup" ? (
          <Field label="姓名">
            <input value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="例如：Alice" />
          </Field>
        ) : null}
        <Field label="邮箱" required>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required />
        </Field>
        {mode !== "reset" ? (
          <Field label="密码" hint={mode === "signup" ? "至少 8 位，建议包含大小写字母和数字。" : ""} required>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={mode === "signup" ? "new-password" : "current-password"} minLength={8} required />
          </Field>
        ) : null}
        {error ? <p className="admin-form-error">{error}</p> : null}
        {message ? <p className="admin-form-success">{message}</p> : null}
        <button className="admin-primary-button auth-submit" type="submit" disabled={busy}>
          {busy ? <LoaderCircle className="spin" size={18} /> : null}
          {mode === "signup" ? "创建账号" : mode === "reset" ? "发送重置邮件" : "安全登录"}
        </button>
        <div className="admin-auth-links">
          {mode !== "login" ? <button type="button" onClick={() => setMode("login")}>返回登录</button> : null}
          {mode === "login" ? <button type="button" onClick={() => setMode("reset")}>忘记密码</button> : null}
          {mode === "login" ? <button type="button" onClick={() => setMode("signup")}>首次设置账号</button> : null}
        </div>
      </form>
    </div>
  );
}

function Dashboard({ counts, profile, onNavigate }) {
  const tiles = [
    { key: "products", label: "产品总数", value: counts.products, icon: Package, note: `${counts.publishedProducts} 个已发布` },
    { key: "blog", label: "文章总数", value: counts.posts, icon: FileText, note: `${counts.publishedPosts} 篇已发布` },
    { key: "products", label: "待完善草稿", value: counts.drafts, icon: Pencil, note: "继续编辑后即可发布" },
  ];
  return (
    <section className="admin-page-section">
      <header className="admin-page-heading">
        <div><span>工作台</span><h1>上午好，{profile.display_name || "管理员"}</h1><p>这里集中管理官网产品和采购指南。</p></div>
      </header>
      <div className="admin-metric-grid">
        {tiles.map(({ key, label, value, icon: Icon, note }) => (
          <button key={`${label}-${key}`} type="button" onClick={() => onNavigate(key)} className="admin-metric">
            <Icon size={22} /><span>{label}</span><strong>{value}</strong><small>{note}</small>
          </button>
        ))}
      </div>
      <div className="admin-quick-panel">
        <div><span>快速开始</span><h2>今天要更新什么？</h2><p>新增产品时请优先准备英文名称、采购规格、主要用途和清晰主图。</p></div>
        <div className="admin-quick-actions">
          <button type="button" onClick={() => onNavigate("products", "new")}><Plus size={18} />新增产品</button>
          <button type="button" onClick={() => onNavigate("blog", "new")}><BookOpen size={18} />撰写文章</button>
        </div>
      </div>
    </section>
  );
}

function ContentToolbar({ title, description, search, setSearch, onNew, newLabel }) {
  return (
    <header className="admin-page-heading with-actions">
      <div><span>内容管理</span><h1>{title}</h1><p>{description}</p></div>
      <button className="admin-primary-button" type="button" onClick={onNew}><Plus size={18} />{newLabel}</button>
      <label className="admin-search"><Search size={17} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索名称或网址标识" /></label>
    </header>
  );
}

function ProductEditor({ item, categories, session, profile, onBack, onSaved, onDeleted }) {
  const [form, setForm] = useState(item ? readProduct(item) : { ...EMPTY_PRODUCT });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const isNew = !form.id;
  const set = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const handleName = (value) => {
    setForm((current) => ({
      ...current,
      name_en: value,
      slug: current.id || current.slug ? current.slug : slugify(value),
    }));
  };

  const save = async (targetStatus = form.status) => {
    setError("");
    const cleanSlug = slugify(form.slug);
    if (!form.name_en.trim() || !cleanSlug || !form.category_slug) {
      setError("请填写英文产品名、网址标识和产品分类。");
      return;
    }
    if (targetStatus === "published" && (!form.description_en.trim() || !form.main_image_path)) {
      setError("发布前必须填写英文产品介绍并上传主图。");
      return;
    }
    setSaving(true);
    const now = new Date().toISOString();
    const payload = {
      slug: cleanSlug,
      category_slug: form.category_slug,
      status: targetStatus,
      sort_order: Number(form.sort_order || 0),
      name_en: form.name_en.trim(),
      name_es: form.name_es.trim() || null,
      tagline_en: form.tagline_en.trim() || null,
      tagline_es: form.tagline_es.trim() || null,
      description_en: form.description_en.trim() || null,
      description_es: form.description_es.trim() || null,
      specs_en: linesToArray(form.specs_en),
      specs_es: linesToArray(form.specs_es),
      features_en: linesToArray(form.features_en),
      features_es: linesToArray(form.features_es),
      applications_en: linesToArray(form.applications_en),
      applications_es: linesToArray(form.applications_es),
      variants_en: linesToArray(form.variants_en),
      variants_es: linesToArray(form.variants_es),
      commercial_info: {
        moq: form.moq.trim(),
        leadTime: form.leadTime.trim(),
        samples: form.samples.trim(),
        certification: form.certification.trim(),
      },
      main_image_path: form.main_image_path || null,
      main_image_alt_en: form.main_image_alt_en.trim() || null,
      main_image_alt_es: form.main_image_alt_es.trim() || null,
      seo_title_en: form.seo_title_en.trim() || null,
      seo_title_es: form.seo_title_es.trim() || null,
      seo_description_en: form.seo_description_en.trim() || null,
      seo_description_es: form.seo_description_es.trim() || null,
      updated_by: session.user.id,
      revision: Math.max(1, Number(form.revision || 0) + 1),
      published_at: targetStatus === "published" ? form.published_at || now : null,
    };
    if (isNew) payload.created_by = session.user.id;

    const query = isNew
      ? supabase.from("products").insert(payload).select().single()
      : supabase.from("products").update(payload).eq("id", form.id).select().single();
    const { data, error: saveError } = await query;
    setSaving(false);
    if (saveError) {
      setError(saveError.code === "23505" ? "这个网址标识已经被使用，请换一个。" : saveError.message);
      return;
    }
    let message = "产品草稿已保存。";
    if (targetStatus === "published") {
      try {
        await triggerWebsitePublish("product", data.slug);
        message = "产品已发布，官网正在自动更新，预计 3–5 分钟完成。";
      } catch (publishError) {
        message = `产品已保存到内容库，但自动更新未启动：${publishError.message}`;
      }
    }
    onSaved(data, message);
  };

  const remove = async () => {
    if (!form.id || profile.role !== "admin" || !window.confirm(`确定删除“${form.name_en}”吗？此操作不能撤销。`)) return;
    setDeleting(true);
    const { error: deleteError } = await supabase.from("products").delete().eq("id", form.id);
    setDeleting(false);
    if (deleteError) setError(deleteError.message);
    else onDeleted("产品已删除。");
  };

  return (
    <section className="admin-editor-page">
      <div className="admin-editor-topbar">
        <button type="button" onClick={onBack} className="admin-back-button"><ArrowLeft size={18} />返回产品列表</button>
        <div className="admin-editor-actions">
          {!isNew && profile.role === "admin" ? <button type="button" className="admin-danger-button" onClick={remove} disabled={deleting}><Trash2 size={17} />删除</button> : null}
          <button type="button" className="admin-secondary-button" onClick={() => save("draft")} disabled={saving}><Save size={17} />保存草稿</button>
          <button type="button" className="admin-primary-button" onClick={() => save("published")} disabled={saving}><Send size={17} />发布</button>
        </div>
      </div>
      <header className="admin-editor-heading"><span>{isNew ? "新增产品" : "编辑产品"}</span><h1>{form.name_en || "未命名产品"}</h1><StatusBadge status={form.status} /></header>
      {error ? <div className="admin-inline-error">{error}</div> : null}
      <div className="admin-editor-layout">
        <div className="admin-editor-main">
          <section className="admin-form-section">
            <h2>基本信息</h2>
            <div className="admin-form-grid">
              <Field label="英文产品名" required><input value={form.name_en} onChange={(event) => handleName(event.target.value)} /></Field>
              <Field label="西班牙语产品名"><input value={form.name_es} onChange={(event) => set("name_es", event.target.value)} /></Field>
              <Field label="网址标识" hint="只用小写英文字母、数字和连字符。" required><input value={form.slug} onChange={(event) => set("slug", slugify(event.target.value))} /></Field>
              <Field label="分类" required><select value={form.category_slug} onChange={(event) => set("category_slug", event.target.value)}>{categories.map((category) => <option key={category.slug} value={category.slug}>{category.name_en}</option>)}</select></Field>
              <Field label="英文卖点" wide><input value={form.tagline_en} onChange={(event) => set("tagline_en", event.target.value)} placeholder="一句话说明材料、用途与采购价值" /></Field>
              <Field label="西语卖点" wide><input value={form.tagline_es} onChange={(event) => set("tagline_es", event.target.value)} /></Field>
              <Field label="英文产品介绍" wide required><textarea rows="7" value={form.description_en} onChange={(event) => set("description_en", event.target.value)} /></Field>
              <Field label="西语产品介绍" wide><textarea rows="7" value={form.description_es} onChange={(event) => set("description_es", event.target.value)} /></Field>
            </div>
          </section>
          <section className="admin-form-section">
            <h2>采购规格与用途</h2>
            <p className="admin-section-intro">每行填写一项，前台会自动整理为清晰列表。</p>
            <div className="admin-form-grid">
              <Field label="英文规格"><textarea rows="7" value={form.specs_en} onChange={(event) => set("specs_en", event.target.value)} placeholder={"GSM: 250–400 gsm\nSheet size: Custom sizes available"} /></Field>
              <Field label="西语规格"><textarea rows="7" value={form.specs_es} onChange={(event) => set("specs_es", event.target.value)} /></Field>
              <Field label="英文用途"><textarea rows="6" value={form.applications_en} onChange={(event) => set("applications_en", event.target.value)} /></Field>
              <Field label="西语用途"><textarea rows="6" value={form.applications_es} onChange={(event) => set("applications_es", event.target.value)} /></Field>
              <Field label="英文优势"><textarea rows="6" value={form.features_en} onChange={(event) => set("features_en", event.target.value)} /></Field>
              <Field label="西语优势"><textarea rows="6" value={form.features_es} onChange={(event) => set("features_es", event.target.value)} /></Field>
              <Field label="英文可选款式"><textarea rows="5" value={form.variants_en} onChange={(event) => set("variants_en", event.target.value)} /></Field>
              <Field label="西语可选款式"><textarea rows="5" value={form.variants_es} onChange={(event) => set("variants_es", event.target.value)} /></Field>
            </div>
          </section>
          <section className="admin-form-section">
            <h2>SEO 搜索信息</h2>
            <div className="admin-form-grid">
              <Field label="英文 SEO 标题" hint={`${form.seo_title_en.length}/60`}><input maxLength="70" value={form.seo_title_en} onChange={(event) => set("seo_title_en", event.target.value)} /></Field>
              <Field label="西语 SEO 标题" hint={`${form.seo_title_es.length}/60`}><input maxLength="70" value={form.seo_title_es} onChange={(event) => set("seo_title_es", event.target.value)} /></Field>
              <Field label="英文搜索描述" hint={`${form.seo_description_en.length}/160`}><textarea rows="4" maxLength="175" value={form.seo_description_en} onChange={(event) => set("seo_description_en", event.target.value)} /></Field>
              <Field label="西语搜索描述" hint={`${form.seo_description_es.length}/160`}><textarea rows="4" maxLength="175" value={form.seo_description_es} onChange={(event) => set("seo_description_es", event.target.value)} /></Field>
            </div>
          </section>
        </div>
        <aside className="admin-editor-side">
          <section className="admin-form-section sticky-section">
            <h2>产品主图</h2>
            <ImageUploader value={form.main_image_path} alt={form.main_image_alt_en} folder="products" slug={form.slug} userId={session.user.id} onUploaded={(path) => set("main_image_path", path)} />
            <Field label="英文图片说明" hint="描述图片中的具体产品和用途，有利于 Google 图片搜索。"><textarea rows="3" value={form.main_image_alt_en} onChange={(event) => set("main_image_alt_en", event.target.value)} /></Field>
            <Field label="西语图片说明"><textarea rows="3" value={form.main_image_alt_es} onChange={(event) => set("main_image_alt_es", event.target.value)} /></Field>
          </section>
          <section className="admin-form-section">
            <h2>交易信息</h2>
            <Field label="MOQ"><input value={form.moq} onChange={(event) => set("moq", event.target.value)} placeholder="例如：1 metric ton" /></Field>
            <Field label="交期"><input value={form.leadTime} onChange={(event) => set("leadTime", event.target.value)} placeholder="例如：2–3 weeks" /></Field>
            <Field label="样品政策"><textarea rows="3" value={form.samples} onChange={(event) => set("samples", event.target.value)} /></Field>
            <Field label="认证"><input value={form.certification} onChange={(event) => set("certification", event.target.value)} placeholder="例如：FSC, SGS" /></Field>
            <Field label="排序"><input type="number" value={form.sort_order} onChange={(event) => set("sort_order", event.target.value)} /></Field>
          </section>
        </aside>
      </div>
    </section>
  );
}

function ProductsManager({ session, profile, initialAction, onActionHandled, notify }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [creating, setCreating] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [{ data: productData, error }, { data: categoryData }] = await Promise.all([
      supabase.from("products").select("*").order("updated_at", { ascending: false }),
      supabase.from("product_categories").select("*").order("sort_order"),
    ]);
    if (error) notify(error.message, "error");
    setProducts(productData || []);
    setCategories(categoryData || []);
    setLoading(false);
  }, [notify]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => {
    if (initialAction === "new") {
      setCreating(true);
      onActionHandled();
    }
  }, [initialAction, onActionHandled]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return query ? products.filter((product) => `${product.name_en} ${product.name_es || ""} ${product.slug}`.toLowerCase().includes(query)) : products;
  }, [products, search]);

  if (creating || editing) {
    return <ProductEditor item={editing} categories={categories} session={session} profile={profile} onBack={() => { setCreating(false); setEditing(null); }} onSaved={(data, message) => { notify(message); setCreating(false); setEditing(null); load(); }} onDeleted={(message) => { notify(message); setEditing(null); load(); }} />;
  }

  return (
    <section className="admin-page-section">
      <ContentToolbar title="产品管理" description="维护产品资料、采购参数、主图和搜索信息。" search={search} setSearch={setSearch} onNew={() => setCreating(true)} newLabel="新增产品" />
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>产品</th><th>分类</th><th>状态</th><th>最近更新</th><th aria-label="操作" /></tr></thead>
          <tbody>
            {loading ? <tr><td colSpan="5" className="admin-empty"><LoaderCircle className="spin" size={24} />正在读取产品...</td></tr> : null}
            {!loading && !filtered.length ? <tr><td colSpan="5" className="admin-empty"><Package size={30} /><strong>还没有产品</strong><span>点击“新增产品”开始建立内容库。</span></td></tr> : null}
            {filtered.map((product) => (
              <tr key={product.id}>
                <td><div className="admin-item-cell">{product.main_image_path ? <img src={getPublicMediaUrl(product.main_image_path)} alt="" /> : <span className="admin-image-placeholder"><Package size={18} /></span>}<div><strong>{product.name_en}</strong><small>/{product.slug}</small></div></div></td>
                <td>{categories.find((category) => category.slug === product.category_slug)?.name_en || product.category_slug}</td>
                <td><StatusBadge status={product.status} /></td>
                <td>{formatDate(product.updated_at)}</td>
                <td><button className="admin-icon-button" type="button" onClick={() => setEditing(product)} aria-label={`编辑 ${product.name_en}`}><Pencil size={17} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BlogEditor({ item, session, profile, onBack, onSaved, onDeleted }) {
  const [form, setForm] = useState(item ? readPost(item) : { ...EMPTY_POST });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const isNew = !form.id;
  const set = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const save = async (targetStatus = form.status) => {
    setError("");
    const cleanSlug = slugify(form.slug);
    if (!form.title.trim() || !cleanSlug) return setError("请填写文章标题和网址标识。");
    if (targetStatus === "published" && (!form.excerpt.trim() || !form.content_markdown.trim() || !form.cover_image_path)) {
      return setError("发布前必须填写摘要、正文并上传主图。");
    }
    setSaving(true);
    const now = new Date().toISOString();
    const payload = {
      slug: cleanSlug,
      status: targetStatus,
      title: form.title.trim(),
      excerpt: form.excerpt.trim() || null,
      content_markdown: form.content_markdown.trim(),
      category: form.category.trim() || null,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      cover_image_path: form.cover_image_path || null,
      cover_image_alt: form.cover_image_alt.trim() || null,
      seo_title: form.seo_title.trim() || null,
      seo_description: form.seo_description.trim() || null,
      related_product_slugs: form.related_product_slugs.split(",").map((slug) => slugify(slug)).filter(Boolean),
      author_name: form.author_name.trim() || "YOUNGSUN PAPER Editorial",
      updated_by: session.user.id,
      revision: Math.max(1, Number(form.revision || 0) + 1),
      reading_time_minutes: Math.max(1, Math.ceil(form.content_markdown.trim().split(/\s+/).filter(Boolean).length / 220)),
      published_at: targetStatus === "published" ? form.published_at || now : null,
    };
    if (isNew) payload.created_by = session.user.id;
    const query = isNew
      ? supabase.from("blog_posts").insert(payload).select().single()
      : supabase.from("blog_posts").update(payload).eq("id", form.id).select().single();
    const { data, error: saveError } = await query;
    setSaving(false);
    if (saveError) return setError(saveError.code === "23505" ? "这个网址标识已经存在。" : saveError.message);
    let message = "文章草稿已保存。";
    if (targetStatus === "published") {
      try {
        await triggerWebsitePublish("blog", data.slug);
        message = "文章已发布，官网正在自动更新，预计 3–5 分钟完成。";
      } catch (publishError) {
        message = `文章已保存到内容库，但自动更新未启动：${publishError.message}`;
      }
    }
    onSaved(data, message);
  };

  const remove = async () => {
    if (!form.id || profile.role !== "admin" || !window.confirm(`确定删除“${form.title}”吗？`)) return;
    setDeleting(true);
    const { error: deleteError } = await supabase.from("blog_posts").delete().eq("id", form.id);
    setDeleting(false);
    if (deleteError) setError(deleteError.message);
    else onDeleted("文章已删除。");
  };

  return (
    <section className="admin-editor-page">
      <div className="admin-editor-topbar">
        <button type="button" onClick={onBack} className="admin-back-button"><ArrowLeft size={18} />返回文章列表</button>
        <div className="admin-editor-actions">
          {!isNew && profile.role === "admin" ? <button type="button" className="admin-danger-button" onClick={remove} disabled={deleting}><Trash2 size={17} />删除</button> : null}
          <button type="button" className="admin-secondary-button" onClick={() => save("draft")} disabled={saving}><Save size={17} />保存草稿</button>
          <button type="button" className="admin-primary-button" onClick={() => save("published")} disabled={saving}><Send size={17} />发布</button>
        </div>
      </div>
      <header className="admin-editor-heading"><span>{isNew ? "撰写文章" : "编辑文章"}</span><h1>{form.title || "未命名文章"}</h1><StatusBadge status={form.status} /></header>
      {error ? <div className="admin-inline-error">{error}</div> : null}
      <div className="admin-editor-layout blog-editor-layout">
        <div className="admin-editor-main">
          <section className="admin-form-section">
            <h2>文章内容</h2>
            <div className="admin-form-grid one-column">
              <Field label="英文标题" required><input value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value, slug: current.id || current.slug ? current.slug : slugify(event.target.value) }))} /></Field>
              <Field label="网址标识" hint="只用小写英文字母、数字和连字符。" required><input value={form.slug} onChange={(event) => set("slug", slugify(event.target.value))} /></Field>
              <Field label="文章摘要" hint={`${form.excerpt.length}/220`} required><textarea rows="4" maxLength="240" value={form.excerpt} onChange={(event) => set("excerpt", event.target.value)} /></Field>
              <Field label="正文（Markdown）" hint="用 ## 写二级标题，用 - 写列表，用 [文字](链接) 添加内链。" required><textarea className="admin-markdown-editor" rows="25" value={form.content_markdown} onChange={(event) => set("content_markdown", event.target.value)} /></Field>
            </div>
          </section>
          <section className="admin-form-section">
            <h2>SEO 搜索信息</h2>
            <div className="admin-form-grid one-column">
              <Field label="SEO 标题" hint={`${form.seo_title.length}/60`}><input maxLength="70" value={form.seo_title} onChange={(event) => set("seo_title", event.target.value)} /></Field>
              <Field label="搜索描述" hint={`${form.seo_description.length}/160`}><textarea rows="4" maxLength="175" value={form.seo_description} onChange={(event) => set("seo_description", event.target.value)} /></Field>
            </div>
          </section>
        </div>
        <aside className="admin-editor-side">
          <section className="admin-form-section sticky-section">
            <h2>文章主图</h2>
            <ImageUploader value={form.cover_image_path} alt={form.cover_image_alt} folder="blog" slug={form.slug} userId={session.user.id} onUploaded={(path) => set("cover_image_path", path)} />
            <Field label="图片说明" hint="具体说明图片内容，不要堆关键词。"><textarea rows="3" value={form.cover_image_alt} onChange={(event) => set("cover_image_alt", event.target.value)} /></Field>
          </section>
          <section className="admin-form-section">
            <h2>文章设置</h2>
            <Field label="分类"><input value={form.category} onChange={(event) => set("category", event.target.value)} /></Field>
            <Field label="标签" hint="多个标签用英文逗号分开。"><textarea rows="3" value={form.tags} onChange={(event) => set("tags", event.target.value)} /></Field>
            <Field label="关联产品网址标识" hint="例如：grey-board, black-paper"><textarea rows="3" value={form.related_product_slugs} onChange={(event) => set("related_product_slugs", event.target.value)} /></Field>
            <Field label="作者"><input value={form.author_name} onChange={(event) => set("author_name", event.target.value)} /></Field>
          </section>
        </aside>
      </div>
    </section>
  );
}

function BlogManager({ session, profile, initialAction, onActionHandled, notify }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [creating, setCreating] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.from("blog_posts").select("*").order("updated_at", { ascending: false });
    if (error) notify(error.message, "error");
    setPosts(data || []);
    setLoading(false);
  }, [notify]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => {
    if (initialAction === "new") {
      setCreating(true);
      onActionHandled();
    }
  }, [initialAction, onActionHandled]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return query ? posts.filter((post) => `${post.title} ${post.slug} ${post.category || ""}`.toLowerCase().includes(query)) : posts;
  }, [posts, search]);

  if (creating || editing) {
    return <BlogEditor item={editing} session={session} profile={profile} onBack={() => { setCreating(false); setEditing(null); }} onSaved={(data, message) => { notify(message); setCreating(false); setEditing(null); load(); }} onDeleted={(message) => { notify(message); setEditing(null); load(); }} />;
  }

  return (
    <section className="admin-page-section">
      <ContentToolbar title="Blog 管理" description="发布采购指南、材料知识和产品应用文章。" search={search} setSearch={setSearch} onNew={() => setCreating(true)} newLabel="撰写文章" />
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>文章</th><th>分类</th><th>状态</th><th>最近更新</th><th aria-label="操作" /></tr></thead>
          <tbody>
            {loading ? <tr><td colSpan="5" className="admin-empty"><LoaderCircle className="spin" size={24} />正在读取文章...</td></tr> : null}
            {!loading && !filtered.length ? <tr><td colSpan="5" className="admin-empty"><FileText size={30} /><strong>还没有文章</strong><span>点击“撰写文章”开始建立内容库。</span></td></tr> : null}
            {filtered.map((post) => (
              <tr key={post.id}>
                <td><div className="admin-item-cell">{post.cover_image_path ? <img src={getPublicMediaUrl(post.cover_image_path)} alt="" /> : <span className="admin-image-placeholder"><FileText size={18} /></span>}<div><strong>{post.title}</strong><small>/blog/{post.slug}</small></div></div></td>
                <td>{post.category || "未分类"}</td>
                <td><StatusBadge status={post.status} /></td>
                <td>{formatDate(post.updated_at)}</td>
                <td><button className="admin-icon-button" type="button" onClick={() => setEditing(post)} aria-label={`编辑 ${post.title}`}><Pencil size={17} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AccountPanel({ profile, session }) {
  return (
    <section className="admin-page-section">
      <header className="admin-page-heading"><div><span>账号</span><h1>个人资料</h1><p>查看当前账号权限和安全信息。</p></div></header>
      <div className="admin-account-panel">
        <div className="admin-avatar">{(profile.display_name || profile.email || "Y").slice(0, 1).toUpperCase()}</div>
        <div><strong>{profile.display_name || "YOUNGSUN 用户"}</strong><span>{session.user.email}</span></div>
        <dl><div><dt>角色</dt><dd>{profile.role === "admin" ? "管理员" : "编辑"}</dd></div><div><dt>状态</dt><dd>已启用</dd></div></dl>
      </div>
    </section>
  );
}

export default function Admin() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("dashboard");
  const [mobileNav, setMobileNav] = useState(false);
  const [nextAction, setNextAction] = useState("");
  const [notice, setNotice] = useState(null);
  const [counts, setCounts] = useState({ products: 0, publishedProducts: 0, posts: 0, publishedPosts: 0, drafts: 0 });

  const notify = useCallback((message, type = "success") => {
    setNotice({ message, type });
    window.setTimeout(() => setNotice(null), 4200);
  }, []);

  const loadProfile = useCallback(async (activeSession) => {
    if (!activeSession) {
      setProfile(null);
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.from("cms_users").select("*").eq("id", activeSession.user.id).maybeSingle();
    if (error) notify(error.message, "error");
    setProfile(data || null);
    setLoading(false);
  }, [notify]);

  const loadCounts = useCallback(async () => {
    if (!profile?.is_active) return;
    const [products, publishedProducts, posts, publishedPosts, productDrafts, postDrafts] = await Promise.all([
      supabase.from("products").select("id", { count: "exact", head: true }),
      supabase.from("products").select("id", { count: "exact", head: true }).eq("status", "published"),
      supabase.from("blog_posts").select("id", { count: "exact", head: true }),
      supabase.from("blog_posts").select("id", { count: "exact", head: true }).eq("status", "published"),
      supabase.from("products").select("id", { count: "exact", head: true }).eq("status", "draft"),
      supabase.from("blog_posts").select("id", { count: "exact", head: true }).eq("status", "draft"),
    ]);
    setCounts({
      products: products.count || 0,
      publishedProducts: publishedProducts.count || 0,
      posts: posts.count || 0,
      publishedPosts: publishedPosts.count || 0,
      drafts: (productDrafts.count || 0) + (postDrafts.count || 0),
    });
  }, [profile?.is_active]);

  useEffect(() => {
    document.documentElement.classList.add("admin-active");
    supabase?.auth.getSession().then(({ data }) => {
      setSession(data.session);
      loadProfile(data.session);
    });
    const { data: listener } = supabase?.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      loadProfile(nextSession);
    }) || { data: null };
    return () => {
      document.documentElement.classList.remove("admin-active");
      listener?.subscription?.unsubscribe();
    };
  }, [loadProfile]);

  useEffect(() => { loadCounts(); }, [loadCounts]);

  if (!isSupabaseConfigured) {
    return <div className="admin-setup-error"><h1>后台尚未连接</h1><p>请在网站环境中配置 Supabase 地址和公开密钥。</p></div>;
  }
  if (loading) return <div className="admin-loading"><LoaderCircle className="spin" size={30} /><span>正在安全连接后台...</span></div>;
  if (!session) return <AuthScreen />;
  if (!profile?.is_active) {
    return (
      <div className="admin-pending-page">
        <div><UserRound size={30} /><h1>账号等待启用</h1><p>{session.user.email}</p><span>为保护公司资料，新团队账号需要管理员启用后才能进入。</span><button type="button" onClick={() => supabase.auth.signOut()}>退出登录</button></div>
      </div>
    );
  }

  const navItems = [
    { id: "dashboard", label: "工作台", icon: LayoutDashboard },
    { id: "products", label: "产品管理", icon: Package },
    { id: "blog", label: "Blog 管理", icon: FileText },
    { id: "account", label: "我的账号", icon: UserRound },
  ];
  const navigate = (target, action = "") => {
    setSection(target);
    setNextAction(action);
    setMobileNav(false);
  };

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar${mobileNav ? " open" : ""}`}>
        <div className="admin-sidebar-brand"><img src="/images/logo-header.webp" alt="YOUNGSUN PAPER" /><span>内容管理后台</span></div>
        <nav>{navItems.map(({ id, label, icon: Icon }) => <button type="button" key={id} className={section === id ? "active" : ""} onClick={() => navigate(id)}><Icon size={19} />{label}</button>)}</nav>
        <div className="admin-sidebar-footer"><a href="/" target="_blank" rel="noreferrer"><ExternalLink size={17} />查看官网</a><button type="button" onClick={() => supabase.auth.signOut()}><LogOut size={17} />退出登录</button></div>
      </aside>
      {mobileNav ? <button className="admin-nav-scrim" type="button" onClick={() => setMobileNav(false)} aria-label="关闭菜单" /> : null}
      <div className="admin-workspace">
        <header className="admin-mobile-header"><button type="button" onClick={() => setMobileNav(true)} aria-label="打开菜单"><Menu size={22} /></button><img src="/images/logo-header.webp" alt="YOUNGSUN PAPER" /><span>{profile.display_name || "管理员"}</span></header>
        <Notice notice={notice} onClose={() => setNotice(null)} />
        {section === "dashboard" ? <Dashboard counts={counts} profile={profile} onNavigate={navigate} /> : null}
        {section === "products" ? <ProductsManager session={session} profile={profile} initialAction={nextAction} onActionHandled={() => setNextAction("")} notify={notify} /> : null}
        {section === "blog" ? <BlogManager session={session} profile={profile} initialAction={nextAction} onActionHandled={() => setNextAction("")} notify={notify} /> : null}
        {section === "account" ? <AccountPanel profile={profile} session={session} /> : null}
      </div>
    </div>
  );
}
