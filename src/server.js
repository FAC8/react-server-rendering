const Hapi = require('hapi');

const server = new Hapi.Server();
const port = 3000;

// Require react libs
const ReactDOM = require('react-dom/server');
const app = require('./app');
const renderHtml = require('../template/html');

server.connection({ port });

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    const html = renderHtml(ReactDOM.renderToString(app));
    reply(html);
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
