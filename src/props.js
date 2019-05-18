import React, { Component } from 'react'

// container main
class Container extends Component {
    constructor(props){
        super(props);
        this.state= {}
    }
  render() {
    return (
      <Header name={"Wellerson"}/>
    )
  }
}

// ./component/header.js
class Header extends Component {
    constructor(props){
        super(props);
        this.state= {}
    }
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

export default Container

