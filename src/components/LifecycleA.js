import React, { Component } from 'react';

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'altaf',
    };
    console.log("I'm from constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("I'm from getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("I'm from ComponentDidMount");
  }

  render() {
    console.log("I'm from render method");
    return <div>LifeCycleA</div>;
  }
}

export default LifecycleA;
