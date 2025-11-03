# 11ty Boilerplate

Super basic [11ty](https://www.11ty.dev) starter to get you moving in the right direction and gently introduce some core features like **Passthrough File Copy** for handling images and stylesheets, **layouts**, and templating with [Liquid](https://shopify.github.io/liquid/) and [Markdown](https://www.markdownguide.org).

## Quickstart

1. Create a new repository in your own account from this template.
2. Open the new repository in Codespaces or your own development environment.
3. Make sure you have Node.js installed (this will be automatic if using Codespaces).
4. Install dependencies and run locally:

```bash
npm install
npm run start
```

This specific project is an "Everyday Carry" site. Replace the photos in `/images/` with your own original photos taken on your phone or camera before publishing.

To deploy to Netlify:

1. Create a new site on Netlify and connect the GitHub repository.
2. Set the build command to `npm run build` and the publish directory to `_site` (netlify.toml is included).
3. Deploy and then submit the public GitHub repo URL and the Netlify site URL to D2L.
