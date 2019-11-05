import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      on: false
     };

     setInterval(() => {
       this.setState({ on: !this.state.on })
     }, 5000);
  }
  render() {
    if(this.state.on)
      return <div>ON</div>
    else
      return <div>OFF</div>
  }
}

export default ClassComponent;