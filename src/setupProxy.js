const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log(process.env);
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://3.34.98.176:5000',
            changeOrigin: true
        })
    )
};