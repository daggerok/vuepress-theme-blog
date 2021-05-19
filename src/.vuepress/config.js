const { name: title, description } = require(`${process.cwd()}/package.json`);
const base = process.env.BASE || '';

module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  theme: '@vuepress/theme-blog',
  themeConfig: {
    smoothScroll: true,
    dateFormat: 'YYYY-MM-DD',
  },
  evergreen: true,
  description,
  title,
  base,
};
