import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 15,
    showResult: false
  };

  setA = e => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false
    });
  };

  setB = e => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false
    });
  };

  setshowResultToTrue = e => {
    this.setState({
      showResult: true
    });
  };

  render() {
    const add = this.state.a + this.state.b;
    const sub = this.state.a - this.state.b;
    const mul = this.state.a * this.state.b;

    return (
      <div>
        <input classname="inputA" onChange={this.setA} />
        <input onChange={this.setB} />
        <button onClick={this.setshowResultToTrue}>Result</button>

        {this.state.showResult ? (
          <div>
            <br />
            {"A:" + this.state.a + " B:" + this.state.b}
            <br />
            {"Add :" + add}
            <br />
            {"Sub :" + sub}
            <br />
            {"Mul :" + mul}
          </div>
        ) : (
          <div> Click On Result Button</div>
        )}
      </div>
    );
  }
}

export default Calculator;
