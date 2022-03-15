const htmlmin = require("html-minifier");
const { minify } = require("terser");

module.exports = function (eleventyConfig) {
  // Include all content in the images folder
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Include all content in the fonts folder
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function(content) {
    if(this.outputPath && this.outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }

    return content;
  });

  // Minify JS
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  return {
    dir: {
      // Eleventy will only process files within src
      input: "src",
      // Defining _site is optional (it's already the default)
      output: "_site",
    },
  };
};
