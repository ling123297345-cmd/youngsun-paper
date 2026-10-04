import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const productOutputPath = resolve(root, "src/generated/cmsProducts.js");
const blogOutputPath = resolve(root, "src/generated/cmsBlogPosts.js");
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !publishableKey) {
  throw new Error("SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required for CMS sync.");
}

async function getTable(table, order) {
  const params = new URLSearchParams({ select: "*" });
  if (!serviceRoleKey) params.set("status", "eq.published");
  if (order) params.set("order", order);
  const key = serviceRoleKey || publishableKey;
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}?${params}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!response.ok) {
    throw new Error(`Unable to sync ${table}: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

function mediaUrl(path) {
  if (!path || /^https?:\/\//i.test(path) || path.startsWith("/")) return path || "";
  return `${supabaseUrl}/storage/v1/object/public/cms-media/${path.split("/").map(encodeURIComponent).join("/")}`;
}

function certificationList(commercial) {
  return String(commercial?.certification || "")
    .split(/[,;/]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

const [productRows, postRows] = await Promise.all([
  getTable("products", "sort_order.asc,updated_at.desc"),
  getTable("blog_posts", "published_at.desc"),
]);

const [{ subProducts: sourceProducts }, { blogPosts: sourcePosts }] = await Promise.all([
  import(pathToFileURL(resolve(root, "src/data.js"))),
  import(pathToFileURL(resolve(root, "src/blogData.js"))),
]);
const sourceProductSlugs = new Set(Object.keys(sourceProducts));
const sourcePostSlugs = new Set(sourcePosts.map((post) => post.id));
const publishedProductRows = productRows.filter((row) => row.status === "published");
const publishedPostRows = postRows.filter((row) => row.status === "published");
const productOverrideRows = publishedProductRows.filter((row) => Number(row.revision || 1) > 1 || !sourceProductSlugs.has(row.slug));
const postOverrideRows = publishedPostRows.filter((row) => Number(row.revision || 1) > 1 || !sourcePostSlugs.has(row.slug));
const hiddenProductSlugs = serviceRoleKey ? productRows.filter((row) => row.status !== "published").map((row) => row.slug) : [];
const hiddenPostSlugs = serviceRoleKey ? postRows.filter((row) => row.status !== "published").map((row) => row.slug) : [];

const products = productOverrideRows.map((row) => ({
  id: row.slug,
  name: row.name_en,
  category: row.category_slug,
  tagline: row.tagline_en || "",
  description: row.description_en || row.tagline_en || "",
  specs: row.specs_en || [],
  features: row.features_en || [],
  applications: row.applications_en || [],
  variants: row.variants_en || [],
  certifications: certificationList(row.commercial_info),
  commercial: row.commercial_info || {},
  image: mediaUrl(row.main_image_path),
  imageAlt: row.main_image_alt_en || `${row.name_en} supplied by YOUNGSUN PAPER`,
  seoTitle: row.seo_title_en || row.name_en,
  metaDescription: row.seo_description_en || row.tagline_en || row.description_en || "",
}));

const productEs = Object.fromEntries(
  productOverrideRows
    .filter((row) => row.name_es || row.tagline_es || row.description_es)
    .map((row) => [row.slug, {
      name: row.name_es || row.name_en,
      tagline: row.tagline_es || row.description_es || row.tagline_en || "",
      description: row.description_es || row.tagline_es || "",
      specs: row.specs_es?.length ? row.specs_es : row.specs_en || [],
      features: row.features_es?.length ? row.features_es : row.features_en || [],
      applications: row.applications_es?.length ? row.applications_es : row.applications_en || [],
      variants: row.variants_es?.length ? row.variants_es : row.variants_en || [],
      seoTitle: row.seo_title_es || row.name_es || row.name_en,
      metaDescription: row.seo_description_es || row.tagline_es || row.description_es || "",
      imageAlt: row.main_image_alt_es || row.main_image_alt_en || "",
    }]),
);

const posts = postOverrideRows.map((row) => ({
  id: row.slug,
  title: row.title,
  seoTitle: row.seo_title || row.title,
  metaDescription: row.seo_description || row.excerpt || "",
  date: (row.published_at || row.created_at || "").slice(0, 10),
  author: row.author_name || "YOUNGSUN PAPER Editorial",
  category: row.category || "Guides",
  excerpt: row.excerpt || "",
  content: row.content_markdown || "",
  image: mediaUrl(row.cover_image_path),
  imageAlt: row.cover_image_alt || row.title,
  tags: row.tags || [],
}));

const productOutput = `// This file is generated by scripts/fetch-cms-content.mjs.\n` +
  `export const cmsProducts = ${JSON.stringify(products, null, 2)};\n` +
  `export const cmsProductEs = ${JSON.stringify(productEs, null, 2)};\n` +
  `export const cmsHiddenProductSlugs = ${JSON.stringify(hiddenProductSlugs, null, 2)};\n`;
const blogOutput = `// This file is generated by scripts/fetch-cms-content.mjs.\n` +
  `export const cmsBlogPosts = ${JSON.stringify(posts, null, 2)};\n` +
  `export const cmsHiddenBlogPostSlugs = ${JSON.stringify(hiddenPostSlugs, null, 2)};\n`;

await mkdir(dirname(productOutputPath), { recursive: true });
await Promise.all([
  writeFile(productOutputPath, productOutput, "utf8"),
  writeFile(blogOutputPath, blogOutput, "utf8"),
]);
console.log(`CMS overrides: ${products.length} products, ${posts.length} Blog posts; hidden: ${hiddenProductSlugs.length} products, ${hiddenPostSlugs.length} posts.`);
