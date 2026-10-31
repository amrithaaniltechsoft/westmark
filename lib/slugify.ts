/**
 * Slugifies a string for URL paths (e.g. "Basmati Rice" -> "basmati-rice")
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

