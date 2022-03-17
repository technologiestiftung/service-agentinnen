const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Include all content in the common folder and copy it to the build root
  eleventyConfig.addPassthroughCopy({ "src/assets/common": "/" });

  // Include all content in the images folder
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Include all content in the fonts folder
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // Include all content in the js folder
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // Include all content in the docs folder
  eleventyConfig.addPassthroughCopy("src/assets/docs");

  // Remove the soft hyphen from strings (in our case used for the titles)
  eleventyConfig.addFilter("removeSoftHyphen", function (value) {
    return value.replace("&shy;", "");
  });

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
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
