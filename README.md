# React Server Rendering

One problem with single page applications is the size of the initial
page load. One solution to this problem is to use server side rendering
for the initial state of the webpage. This will allow us to render the
index while the *bundle* with all the javascript application loads.

As far as posible we should use the same code in the frontend and in the
backend for rendering the webpages. This pattern is called *isomorphic*
or *universal*. Here we present only the first step of building an
isomorphic application: rendering in the server side.

First we make a react component exactly as we do on the client
(frontend):


**app.js**
```javascript
const React = require('react');

const App = React.createClass({
  render: function(){
    return React.createElement('h1', {}, 'Hello World');
  }
});

module.exports = App;
```

Now, in the routes module we import the element/component along with
ReactDOM for the server:

```javascript
// Require react
const ReactDOM = require('react-dom/server');
const App = require('./app');
```

ReactDOM gives us the method `renderToString` which allows us to convert
the react component to HTML which can be passed to reply in the handler of the index route:

```javascript
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
```

In this example we are not using *jsx*, but the repo where this README
is stored comes with an example of how to do so. Check the first
commits to see how we developed the example in this readme.

The code of the example used in this readme can be found on the branch [readme-example](https://github.com/FAC8/react-server-rendering/tree/readme-example) of this repo.
