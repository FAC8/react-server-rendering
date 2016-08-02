import React, { Component } from 'react';

import Title from './title';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title text="world" />
        <p>This template is being redered through React <strong>in the server</strong></p>
      </div>
    );
  }
}

export default App;
