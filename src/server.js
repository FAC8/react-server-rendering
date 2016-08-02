import Hapi from 'hapi';

const server = new Hapi.Server();
const port = 3000;

// Require react libs
import React from 'react';
import ReactDOM from 'react-dom/server';
import renderHtml from '../template/html';
import App from './app';

server.connection({ port });

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    const html = renderHtml(ReactDOM.renderToString(<App />));
    reply(html);
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
