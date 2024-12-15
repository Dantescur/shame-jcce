import getReadingTime from "reading-time";
import type { Data } from "../interfaces/article";

export function calculateReadingTime(article: Data) {
  const textContent = article.blocks
    ? article.blocks.map((block) => block.body).join(" ")
    : article.description;
  return getReadingTime(textContent || "").text;
}
