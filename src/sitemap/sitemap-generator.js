const { createReadStream, createWriteStream } = require("fs");
const { resolve } = require("path");
const { createGzip } = require("zlib");
const routes = require("./sitemap-routes.js");
const { simpleSitemapAndIndex } = require("sitemap");

// writes sitemaps and index out to the destination you provide.
simpleSitemapAndIndex({
  hostname: "https://example.com",
  destinationDir: "./public",
  sourceData: routes,
}).then(() => {
  // Do follow up actions
});

// require("babel-register")({
//   presets: ["es2015", "react"],
// });

// const router = require("./sitemap-routes");
// const Sitemap = require("react-router-sitemap").default;

// function generateSitemap() {
//   return new Sitemap(router)
//     .build("https://www.example.com")
//     .save("./public/sitemap.xml");
// }

// generateSitemap();
