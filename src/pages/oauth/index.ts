export const prerender = "false";
import type { APIRoute } from "astro";
import { authUrl } from "./_config";

export const GET: APIRoute = ({ redirect }) => {
  console.log("Redirecting to GitHub with URL:", authUrl);
  return redirect(authUrl);
};
