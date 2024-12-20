export function hasNameProperty(
  author: unknown
): author is { name: string | null | undefined } {
  return typeof author === "object" && author !== null && "name" in author;
}
