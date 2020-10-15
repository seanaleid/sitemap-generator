// option 3 -
const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");
const routes = require("./sitemap-routes.js");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: "http://example.com" });

const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

routes.map((x) => {
  sitemap.write(x);
});
// sitemap.write({
//   url: "/test/me",
//   changefreq: "monthly",
//   priority: 1,
// });
// sitemap.write("/page-2");
sitemap.end();

// option 2 - kind of works, but can't confirm the xml output works
// const { createReadStream, createWriteStream } = require("fs");
// const { resolve } = require("path");
// const { createGzip } = require("zlib");
// const routes = require("./sitemap-routes.js");
// const { simpleSitemapAndIndex } = require("sitemap");

// // writes sitemaps and index out to the destination you provide.
// simpleSitemapAndIndex({
//   hostname: "https://example.com",
//   destinationDir: "./public",
//   sourceData: routes,
// }).then(() => {
//   // Do follow up actions
// });

// option 1 - populates xml file with basic xml protocol minus the additional changefreq and priority properties
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
