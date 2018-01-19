import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);

    this.state = {num1: "", num2: "", result: 0 }
  }

  addShit (event) {
    this.setState({result: this.state.num1 + this.state.num2});
  }

  subtractShit (event) {
    this.setState({result: this.state.num1 - this.state.num2});
  }

  multiplyShit (event) {
    this.setState({result: this.state.num1 * this.state.num2});
  }

  divideShit (event) {
    this.setState({result: this.state.num1 / this.state.num2});
  }

  clearShit (event) {
    this.setState({num1: "", num2: "", result: 0 });
  }


  changeNum1 (event) {
    var newNum = event.target.value;
    this.setState({num1: parseInt(newNum)});
  }

  changeNum2 (event) {
    var newNum = event.target.value;
    this.setState({num2: parseInt(newNum)});
  }

  render () {

    return (
      <div>
        <h1>Calculator bitch</h1>
        <button onClick={this.addShit.bind(this)}>Add</button>
        <button onClick={this.subtractShit.bind(this)}>Subtract</button>
        <button onClick={this.multiplyShit.bind(this)}>Multiply</button>
        <button onClick={this.divideShit.bind(this)}>Divide</button>
        <button onClick={this.clearShit.bind(this)}>Clear</button>

          <input onChange={this.changeNum1.bind(this)} value={this.state.num1} />
          <input onChange={this.changeNum2.bind(this)} value={this.state.num2} />
          <h2>RESULT: {this.state.result}</h2>

      </div>
    );
  }
}

export default Calculator;
