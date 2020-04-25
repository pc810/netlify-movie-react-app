const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/.netlify/functions/api',
    createProxyMiddleware({
      target: 'https://reverent-darwin-514260.netlify.app',
      changeOrigin: true,
    })
  );
};