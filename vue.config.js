const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
	? '/VUE_PAGE_DEPLOY_TEST/'
	: '/',
  transpileDependencies: true
})
