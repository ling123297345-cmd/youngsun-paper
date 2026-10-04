import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [dataFile, blogFile, outputFile] = process.argv.slice(2);
if (!dataFile || !blogFile || !outputFile) {
  throw new Error("Usage: node generate-cms-seed.mjs <data.js> <blogData.js> <output.sql>");
}

const { subProducts } = await import(pathToFileURL(resolve(dataFile)));
const { blogPosts } = await import(pathToFileURL(resolve(blogFile)));

const text = (value) => value == null ? "null" : `'${String(value).replaceAll("'", "''")}'`;
const json = (value) => `${text(JSON.stringify(value ?? []))}::jsonb`;
const textArray = (value) => {
  const values = Array.isArray(value) ? value.filter(Boolean) : [];
  return values.length ? `array[${values.map(text).join(", ")}]::text[]` : "'{}'::text[]";
};
const timestamp = (value) => value ? `${text(new Date(`${value}T08:00:00Z`).toISOString())}::timestamptz` : "now()";

const productSql = Object.values(subProducts).map((product, index) => {
  const commercial = {
    ...(product.commercial || {}),
    certification: product.commercial?.certification || (product.certifications || []).join(", "),
    customization: product.customization || [],
    quoteReqs: product.quoteReqs || [],
    keywords: product.keywords || [],
  };
  return `(
    ${text(product.id)}, ${text(product.category)}, 'published', ${index * 10},
    ${text(product.name)}, ${text(product.tagline)}, ${text(product.description)},
    ${json(product.specs)}, ${json(product.features)}, ${json(product.applications)}, ${json(product.variants)},
    ${json(commercial)}, ${text(product.image)}, ${text(`${product.name} paper product supplied by YOUNGSUN PAPER`)},
    ${textArray([])}, ${textArray([])}, ${text(product.seoTitle)}, ${text(product.metaDescription)},
    1, now()
  )`;
}).join(",\n");

const blogSql = blogPosts.map((post) => `(
    ${text(post.id)}, 'published', ${text(post.title)}, ${text(post.excerpt)}, ${text(post.content)},
    ${text(post.category)}, ${textArray(post.tags)}, ${text(post.image)}, ${text(post.imageAlt || post.title)},
    ${text(post.seoTitle)}, ${text(post.metaDescription)}, ${textArray([])}, ${textArray([])},
    ${text(post.author || "YOUNGSUN PAPER Editorial")}, ${timestamp(post.date)}, 1
  )`).join(",\n");

const sql = `begin;

insert into public.products (
  slug, category_slug, status, sort_order,
  name_en, tagline_en, description_en,
  specs_en, features_en, applications_en, variants_en,
  commercial_info, main_image_path, main_image_alt_en,
  related_product_slugs, related_industry_slugs, seo_title_en, seo_description_en,
  revision, published_at
) values
${productSql}
on conflict (slug) do update set
  category_slug = excluded.category_slug,
  name_en = excluded.name_en,
  tagline_en = excluded.tagline_en,
  description_en = excluded.description_en,
  specs_en = excluded.specs_en,
  features_en = excluded.features_en,
  applications_en = excluded.applications_en,
  variants_en = excluded.variants_en,
  commercial_info = excluded.commercial_info,
  main_image_path = excluded.main_image_path,
  main_image_alt_en = excluded.main_image_alt_en,
  seo_title_en = excluded.seo_title_en,
  seo_description_en = excluded.seo_description_en,
  updated_at = now();

insert into public.blog_posts (
  slug, status, title, excerpt, content_markdown,
  category, tags, cover_image_path, cover_image_alt,
  seo_title, seo_description, related_product_slugs, related_post_slugs,
  author_name, published_at, revision
) values
${blogSql}
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_markdown = excluded.content_markdown,
  category = excluded.category,
  tags = excluded.tags,
  cover_image_path = excluded.cover_image_path,
  cover_image_alt = excluded.cover_image_alt,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  author_name = excluded.author_name,
  updated_at = now();

commit;
`;

await mkdir(dirname(resolve(outputFile)), { recursive: true });
await writeFile(resolve(outputFile), sql, "utf8");
console.log(`Generated CMS seed for ${Object.keys(subProducts).length} products and ${blogPosts.length} posts.`);
