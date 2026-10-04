import { createClient } from "npm:@supabase/supabase-js@2";

const allowedOrigins = new Set([
  "https://youngsunpaper.com",
  "https://www.youngsunpaper.com",
  "http://127.0.0.1:4195",
]);

function corsHeaders(origin: string | null) {
  return {
    "Access-Control-Allow-Origin": origin && allowedOrigins.has(origin) ? origin : "https://youngsunpaper.com",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
    "Vary": "Origin",
  };
}

Deno.serve(async (request) => {
  const origin = request.headers.get("origin");
  const headers = corsHeaders(origin);
  if (request.method === "OPTIONS") return new Response("ok", { headers });
  if (request.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  if (origin && !allowedOrigins.has(origin)) return new Response(JSON.stringify({ error: "Origin not allowed" }), { status: 403, headers });

  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Authentication required" }), { status: 401, headers });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const githubToken = Deno.env.get("YOUNGSUN_GITHUB_TOKEN");
  if (!githubToken) return new Response(JSON.stringify({ error: "GitHub publishing is not configured" }), { status: 503, headers });

  const supabase = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authorization } },
    auth: { persistSession: false },
  });
  const { data: { user }, error: userError } = await supabase.auth.getUser(authorization.slice(7));
  if (userError || !user) return new Response(JSON.stringify({ error: "Invalid session" }), { status: 401, headers });

  const { data: cmsUser } = await supabase
    .from("cms_users")
    .select("role,is_active")
    .eq("id", user.id)
    .maybeSingle();
  if (!cmsUser?.is_active) return new Response(JSON.stringify({ error: "CMS account is not active" }), { status: 403, headers });

  const body = await request.json().catch(() => ({}));
  const contentType = body?.contentType === "blog" ? "blog" : "product";
  const slug = String(body?.slug || "").slice(0, 100);
  const githubResponse = await fetch(
    "https://api.github.com/repos/ling123297345-cmd/youngsun-paper/dispatches",
    {
      method: "POST",
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${githubToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "youngsun-cms-publisher",
      },
      body: JSON.stringify({
        event_type: "cms-publish",
        client_payload: { content_type: contentType, slug, actor: user.email || user.id },
      }),
    },
  );

  if (!githubResponse.ok) {
    const detail = await githubResponse.text();
    console.error("GitHub dispatch failed", githubResponse.status, detail);
    return new Response(JSON.stringify({ error: "Unable to start website build" }), { status: 502, headers });
  }

  return new Response(JSON.stringify({ ok: true, message: "Website build started" }), { status: 202, headers });
});
