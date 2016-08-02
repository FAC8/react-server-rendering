const path = require('path');
const Hapi = require('hapi');
const handlebars = require('handlebars');

const server = new Hapi.Server();
const port = 3000;

// Require react libs
const ReactDOM = require('react-dom/server');
const app = require('./app');

server.connection({ port });

server.register(require('vision'), () => {
  server.views({
    engines: {
      html: handlebars,
    },
    relativeTo: path.join(__dirname, '..'),
    path: 'templates',
  });
});

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    const reactHtml = ReactDOM.renderToString(app);

    reply.view('index', { reactOutput: reactHtml });
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
