import getReadingTime from "reading-time";
import type { Data } from "../interfaces/article";

export function calculateReadingTime(content: string) {
  return getReadingTime(content || "").text;
}
