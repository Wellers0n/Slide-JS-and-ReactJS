import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        name: ''
      };
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>
            It is {this.state.date.toLocaleTimeString()}.
          </h2>
          <button onClick={() => this.setState({name: 'Wellerson'})}>
            click
          </button>
        </div>
      );
    }
  }