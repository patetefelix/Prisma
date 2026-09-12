# Updating Prisma’s photos on GitHub

All photo settings are in **site-content.js**. You do not need to edit the HTML pages when using these settings.

1. Upload the new pictures to the **assets** folder in your repository. Use simple names such as `diego-chandelier.jpg` (lowercase, no spaces). JPG, PNG and WebP all work. A width of roughly 1600–2000 pixels and a file size under 1 MB is a good target.
2. Open **site-content.js** on GitHub and click Edit.
3. Change the relevant `src` to the exact uploaded filename, including its extension. Capitalization matters.
4. Update `alt` to briefly describe what the new picture shows. For the gallery, update `caption` too.
5. Save/commit the changes. Once GitHub Pages finishes publishing, refresh the site.

| Setting | Where it appears | Suggested photo |
| --- | --- | --- |
| hero | Homepage opening photograph | Diego working on a chandelier; vertical/square crop |
| commercial | Commercial service card | Cleaning a business space |
| rental | Rental service card | Finished rental interior |
| move | Homes & fresh starts card | Clean home or kitchen |
| highdusting | Homepage story section | Cleaning at height |
| projectChandelier | First gallery image and enlarged viewer | Detail of chandelier work |
| projectRestroom | Second gallery image and enlarged viewer | Commercial deep cleaning |
| aboutHero | About page opening image | Diego at work |

`position` sets the crop using horizontal and vertical percentages. Start with `50% 50%` for centered. Try `50% 25%` to show more of the top. Each placement can use its own image even if several currently share the same photograph.

Example inside an existing entry:

```js
"hero": {
  "src": "assets/diego-chandelier.jpg",
  "alt": "Diego polishing the crystals of a chandelier",
  "position": "50% 40%"
}
```

Keep all setting names, quotes, braces, and commas intact. Do not merely rename a JPG file to .webp; update the path to its actual extension. If you change the subject of a service or project, update its visible heading in index.html as well.

For a no-JavaScript fallback, the original image paths remain in index.html and about.html. You may update those too, but the normal website uses site-content.js.
