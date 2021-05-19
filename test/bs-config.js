// http://www.browsersync.io/docs/options/

const staticDir = require('path').resolve(__dirname, '../src/.vuepress/dist');
const publicPath = '/vuepress-theme-blog/'

module.exports = {
  server: {
    always: 'index.html',
    baseDir: staticDir,
  },
  files: [
    staticDir + publicPath + 'index.html',
    staticDir + publicPath + '**/*.*',
  ],
  startPath: publicPath,
  serveStatic: [
    staticDir,
  ],
};
