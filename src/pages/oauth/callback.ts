// export const prerender = "false";
// import type { APIRoute } from "astro";
// import { clientId, clientSecret, tokenUrl } from "./_config";

import type { APIRoute } from "astro";
import { clientId, clientSecret, tokenUrl } from "./_config";

// export const GET: APIRoute = async ({ url, redirect }) => {
//   const data = {
//     code: url.searchParams.get("code"),
//     client_id: clientId,
//     client_secret: clientSecret,
//   };

//   let script;

//   try {
//     const response = await fetch(tokenUrl, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const body = await response.json();

//     const content = {
//       token: body.access_token,
//       provider: "github",
//     };

//     // This is what talks to the DecapCMS page.
//     // Using window.postMessage we give it the token details in a format it's expecting
//     script = `
//       <script>
//         const receiveMessage = (message) => {
//           window.opener.postMessage(
//             'authorization:${content.provider}:success:${JSON.stringify(
//       content
//     )}',
//             message.origin
//           );

//           window.removeEventListener("message", receiveMessage, false);
//         }
//         window.addEventListener("message", receiveMessage, false);

//         window.opener.postMessage("authorizing:${content.provider}", "*");
//       </script>
//     `;

//     return new Response(script, {
//       headers: { "Content-Type": "text/html" },
//     });
//   } catch (err) {
//     // If we hit an error we'll handle that here
//     console.log(err);
//     return redirect("/?error=😡");
//   }
// };

export const GET: APIRoute = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");
  console.log("Full URL query:", url.searchParams.toString()); // Log all query parameters

  if (!code) {
    console.error("No code parameter found in the URL");
    return redirect("/?error=missing_code");
  }

  const data = {
    code: code,
    client_id: clientId,
    client_secret: clientSecret,
  };

  console.log("Data sent to GitHub:", JSON.stringify(data));

  let script;

  try {
    console.log("Making request to GitHub's OAuth endpoint...");
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("GitHub response status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.json();
    console.log("GitHub response body:", body);

    const content = {
      token: body.access_token,
      provider: "github",
    };
    console.log("Access token received:", content.token);

    script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:success:${JSON.stringify(
      content
    )}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);

        window.opener.postMessage("authorizing:${content.provider}", "*");
      </script>
    `;

    return new Response(script, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    console.error("Error during OAuth callback:", err);
    return redirect("/?error=😡");
  }
};
