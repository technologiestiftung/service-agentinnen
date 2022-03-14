module.exports = function (eleventyConfig) {
  // Include all content in the images folder
  eleventyConfig.addPassthroughCopy("src/assets/images");

  return {
    dir: {
      // Eleventy will only process files within src
      input: "src",
      // Defining _site is optional (it's already the default)
      output: "_site",
    },
  };
};
