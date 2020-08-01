const { use } = require("chai")

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {

    },
    configureWebpack: {
        devtool: 'source-map'
    }
}