const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000', // The backend server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // This will remove '/abc' from the request path before forwarding it to the backend
      },
    })
  );
};
