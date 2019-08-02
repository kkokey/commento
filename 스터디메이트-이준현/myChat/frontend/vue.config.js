module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://localhot:3000/api',
                changeOrigin : true,
                pathRewrite : {
                    "^/api" : ''
                }
            }
        }
    },
    outputDir : '../backend/public'
}