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
    this.state = {
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: ""
    }
  }

  maxDigitWarning = () => {
    this.setState({
      currentVal: "Digit Limit Met",
      prevVal: this.state.currentVal
    });
    setTimeout(() => this.setState({
      currentVal: this.state.prevVal
    }), 1000)
  }

  handleEvaluate = () => {
    if(!this.state.currentVal.includes('Limit')){
      let expression = this.state.formular;
      while(endsWithOperator.test(expression)){
        expression = expression.slice(0, -1);
      }

      expression = expression.replace(/x/g, "*").replace(/-/g, "-");
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: answer.toString(),
        formula: expression.replace(/\*/g, ".").replace(/-/g, "-") + "=" + answer,
        prevVal: answer,
        evaluated: true
      });
    }
  }

  handleOperators = e => {
    if(!this.state.currentVal.includes("Limit")){
      const value = e.target.value;
      const { formula, prevVal, evaluated } = this.state;
      this.setState({
        currentVal: value,
        evaluated: false
      });

      if (evaluated){
        this.setState({ formula: prevVal + value });
      } else if(!endsWithOperator.test(formula)){
        this.setState({
          prevVal: formular,
          formula: formula + value
        });
      } else if(!endsWithNegativeSign.test(formula)){
        this.setState({
          formula: (endsWithNegativeSign.test(formula + value) ? formula : prevVal) + value
        })
      }
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
