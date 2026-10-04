function stripInlineMarkdown(value) {
  return String(value || "")
    .replace(/\[([^\]]+)\]\([^\s)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeHeadingText(value) {
  const text = String(value || "").trim();
  return /^suggested internal links:?$/i.test(text) ? "Related Products and Guides" : text;
}

function splitTableRow(value) {
  return String(value || "")
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableRow(value) {
  const line = String(value || "").trim();
  return line.startsWith("|") && line.endsWith("|") && splitTableRow(line).length > 1;
}

function isTableSeparator(value) {
  const cells = splitTableRow(value);
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function uniqueHeadingId(value, counts) {
  const base = stripInlineMarkdown(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";
  const count = counts.get(base) || 0;
  counts.set(base, count + 1);
  return count ? `${base}-${count + 1}` : base;
}

export function parseBlogContent(markdown) {
  const lines = String(markdown || "").split(/\r?\n/);
  const blocks = [];
  const headingCounts = new Map();
  let skippedDocumentTitle = false;
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = normalizeHeadingText(heading[2]);
      if (level === 1 && !skippedDocumentTitle) {
        skippedDocumentTitle = true;
      } else {
        blocks.push({
          type: "heading",
          level: level === 1 ? 2 : level,
          text,
          id: uniqueHeadingId(text, headingCounts),
        });
      }
      index += 1;
      continue;
    }

    if (isTableRow(line) && isTableSeparator(lines[index + 1])) {
      const headers = splitTableRow(line);
      const rows = [];
      index += 2;
      while (index < lines.length && isTableRow(lines[index])) {
        const cells = splitTableRow(lines[index]);
        while (cells.length < headers.length) cells.push("");
        rows.push(cells.slice(0, headers.length));
        index += 1;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    const listMatch = line.match(/^([-*]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const ordered = /\d+\./.test(listMatch[1]);
      const items = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^([-*]|\d+\.)\s+(.+)$/);
        if (!item || /\d+\./.test(item[1]) !== ordered) break;
        items.push(item[2].trim());
        index += 1;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || /^(#{1,3})\s+/.test(next) || /^([-*]|\d+\.)\s+/.test(next)) break;
      if (isTableRow(next) && isTableSeparator(lines[index + 1])) break;
      paragraph.push(next);
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

export function getBlogToc(blocks) {
  return (blocks || [])
    .filter((block) => block.type === "heading" && block.level === 2)
    .map((block) => ({ id: block.id, text: stripInlineMarkdown(block.text) }));
}

export function extractBlogFaqs(blocksOrMarkdown) {
  const blocks = Array.isArray(blocksOrMarkdown)
    ? blocksOrMarkdown
    : parseBlogContent(blocksOrMarkdown);
  const faqStart = blocks.findIndex(
    (block) => block.type === "heading" && block.level === 2 && /\bfaq\b|frequently asked questions/i.test(stripInlineMarkdown(block.text)),
  );
  if (faqStart < 0) return [];

  const items = [];
  for (let index = faqStart + 1; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block.type === "heading" && block.level === 2) break;
    if (block.type !== "heading" || block.level !== 3) continue;

    const answerParts = [];
    for (let answerIndex = index + 1; answerIndex < blocks.length; answerIndex += 1) {
      const answerBlock = blocks[answerIndex];
      if (answerBlock.type === "heading") break;
      if (answerBlock.type === "paragraph") answerParts.push(stripInlineMarkdown(answerBlock.text));
      if (answerBlock.type === "list") answerParts.push(answerBlock.items.map(stripInlineMarkdown).join("; "));
    }
    const answer = answerParts.join(" ").trim();
    if (answer) items.push({ q: stripInlineMarkdown(block.text), a: answer });
  }
  return items;
}

export function getRelatedBlogPosts(post, posts, limit = 3) {
  const sourceTags = new Set((post?.tags || []).map((tag) => String(tag).toLowerCase()));
  return (posts || [])
    .filter((candidate) => candidate.id !== post?.id)
    .map((candidate, index) => {
      const sharedTags = (candidate.tags || []).filter((tag) => sourceTags.has(String(tag).toLowerCase())).length;
      const sameCategory = candidate.category === post?.category ? 1 : 0;
      return { candidate, index, score: sharedTags * 3 + sameCategory * 2 };
    })
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
