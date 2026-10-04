import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export function getPublicMediaUrl(path) {
  if (!path || !supabase) return "";
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/")) return path;
  return supabase.storage.from("cms-media").getPublicUrl(path).data.publicUrl;
}

export function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export function linesToArray(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function arrayToLines(value) {
  return Array.isArray(value) ? value.join("\n") : "";
}

function safeFileName(value) {
  return slugify(String(value || "image").replace(/\.[^.]+$/, "")) || "image";
}

export async function compressImage(file, maxWidth = 2000, quality = 0.84) {
  if (!file?.type?.startsWith("image/")) {
    throw new Error("请选择 JPG、PNG 或 WebP 图片。");
  }

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / bitmap.width);
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close?.();

  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (result) => (result ? resolve(result) : reject(new Error("图片压缩失败，请换一张图片重试。"))),
      "image/webp",
      quality,
    );
  });

  return {
    blob,
    width,
    height,
    fileName: `${safeFileName(file.name)}.webp`,
  };
}

export async function uploadCmsImage({ file, folder, slug, userId }) {
  if (!supabase) throw new Error("Supabase 尚未配置。");
  const optimized = await compressImage(file);
  const timestamp = Date.now();
  const storagePath = `${folder}/${slug || "untitled"}/${timestamp}-${optimized.fileName}`;
  const { error } = await supabase.storage.from("cms-media").upload(storagePath, optimized.blob, {
    contentType: "image/webp",
    cacheControl: "31536000",
    upsert: false,
    metadata: { uploadedBy: userId || "unknown" },
  });
  if (error) throw error;
  return {
    path: storagePath,
    publicUrl: getPublicMediaUrl(storagePath),
    width: optimized.width,
    height: optimized.height,
    fileSize: optimized.blob.size,
  };
}
