import React, { Component } from 'react';

// variables
const operator = /[x/+-]/, 
    endsWithOperator = /[x+-/]$/, 
    endsWithNegativeSign = /[x/+]-$/,
    clearStyle = { background: "#ac3939" },
    equalStyle = {
      background: "#004466",
      position: "absolute",
      height: 130,
      bottom: 5
    },

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
