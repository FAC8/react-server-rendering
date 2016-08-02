const Hapi = require('hapi');

const server = new Hapi.Server();
const port = 3000;

// Require react libs
const ReactDOM = require('react-dom/server');
const App = require('./app');

server.connection({ port });

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    const app = new App();
    const reactOutput = ReactDOM.renderToString(app.render());

    const html = `
      <html>
        <head>
        </head>
        <body>
          ${reactOutput}
        </body>
      </html>
    `;

    reply(html);
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
