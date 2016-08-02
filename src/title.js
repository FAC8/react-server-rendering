import React, { Component } from 'react';

class Title extends Component {
  constructor() {
    super();
    this.state = {
      text: 'world',
    };
  }

  render() {
    return (
      <h1>Hello {this.state.text}</h1>
    );
  }
}

export default Title;
