export function hasSpanishBlogPost(post) {
  return Boolean(post?.titleEs && post?.contentEs && post?.excerptEs);
}

export function localizeBlogPost(post, lang = "en") {
  if (!post || lang !== "es" || !hasSpanishBlogPost(post)) return post;

  return {
    ...post,
    title: post.titleEs,
    seoTitle: post.seoTitleEs || post.titleEs,
    metaDescription: post.metaDescriptionEs || post.excerptEs,
    category: post.categoryEs || post.category,
    excerpt: post.excerptEs,
    content: post.contentEs,
    imageAlt: post.imageAltEs || post.imageAlt,
    imageCaption: post.imageCaptionEs || post.imageCaption,
    tags: post.tagsEs || post.tags,
  };
}
