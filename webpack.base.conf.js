// 新增一隻名為 vue.config.js 的檔案在專案的根目錄

const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
        })
        ],
  },
};