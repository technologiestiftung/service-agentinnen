module.exports = {
  eleventyComputed: {
    next_module: (data) => {
      const modules = data.collections.sortedModules;
      const currentIndex = modules.findIndex(
        (module) => module.fileSlug === data.page.fileSlug
      );
      const nextIndex =
        currentIndex + 1 >= modules.length ? 0 : currentIndex + 1;
      const nextModule = modules[nextIndex];
      if (!nextModule) return;
      const newNext = {
        url: nextModule.data.page.url,
        fileSlug: nextModule.data.page.fileSlug,
        ...nextModule.data,
      };
      return newNext;
    },
  },
};
