const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader');
  }
});
