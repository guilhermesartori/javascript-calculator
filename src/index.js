import React from "react";
import ReactDOM from "react-dom";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      operand1: undefined,
      operand2: undefined,
      operation: undefined
    };
    this.numberClick = this.numberClick.bind(this);
    this.decimalClick = this.decimalClick.bind(this);
    this.operatorClick = this.operatorClick.bind(this);
    this.clearClick = this.clearClick.bind(this);
    this.equalsClick = this.equalsClick.bind(this);
  }
  numberClick(number) {
    if (this.state.display === "0") {
      this.setState(
        Object.assign({}, this.state, {
          display: String(number),
          operand1: number === 0 ? undefined : String(number)
        })
      );
    } else if (this.state.operation === undefined) {
      this.setState(
        Object.assign({}, this.state, {
          display: this.state.display + String(number),
          operand1: this.state.operand1 + String(number)
        })
      );
    } else if (this.state.operand2 === undefined) {
      this.setState(
        Object.assign({}, this.state, {
          display: this.state.display + String(number),
          operand2: String(number)
        })
      );
    } else {
      this.setState(
        Object.assign({}, this.state, {
          display: this.state.display + String(number),
          operand2: this.state.operand2 + String(number)
        })
      );
    }
  }
  decimalClick() {
    if (
      this.state.operation === undefined &&
      this.state.operand2 === undefined
    ) {
      if (this.state.operand1 === undefined) {
        this.setState(
          Object.assign({}, this.state, {
            display: this.state.display + ".",
            operand1: "0."
          })
        );
      }
      if (!this.state.operand1.includes(".")) {
        this.setState(
          Object.assign({}, this.state, {
            display: this.state.display + ".",
            operand1: this.state.operand1 + "."
          })
        );
      }
    } else if (this.state.operand2 === undefined) {
      this.setState(
        Object.assign({}, this.state, {
          display: this.state.display + ".",
          operand2: "0."
        })
      );
    } else if (!this.state.operand2.includes(".")) {
      this.setState(
        Object.assign({}, this.state, {
          display: this.state.display + ".",
          operand2: this.state.operand2 + "."
        })
      );
    }
  }
  operatorClick(operation) {
    if (
      this.state.operand1 !== undefined &&
      this.state.operand2 !== undefined &&
      this.state.operation !== undefined
    ) {
      let operand1 = Number(this.state.operand1);
      let operand2 = Number(this.state.operand2);
      let result = operand1;
      switch (this.state.operation) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        default:
          break;
      }
      this.setState({
        operand1: String(result),
        operand2: undefined,
        operation: operation
      });
    }
    if (this.state.operation === undefined) {
      this.setState(
        Object.assign({}, this.state, {
          operation: operation,
          display: this.state.display + operation
        })
      );
    } else if (
      (this.state.operand2 === undefined || this.state.operand2 === "-") &&
      operation !== "-"
    ) {
      this.setState(
        Object.assign({}, this.state, {
          display:
            this.state.display.slice(0, this.state.display.length - 1) +
            operation,
          operation: operation,
          operand2: undefined
        })
      );
    } else if (this.state.operand2 === undefined && operation === "-") {
      this.setState(
        Object.assign({}, this.state, {
          display: this.state.display + operation,
          operand2: operation
        })
      );
    }
  }
  equalsClick() {
    if (
      this.state.operand1 !== undefined &&
      this.state.operand2 !== undefined &&
      this.state.operation !== undefined
    ) {
      let operand1 = Number(this.state.operand1);
      let operand2 = Number(this.state.operand2);
      let result = operand1;
      switch (this.state.operation) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        default:
          break;
      }
      this.setState({
        display: String(result),
        operand1: String(result),
        operand2: undefined,
        operation: undefined
      });
    }
  }
  clearClick() {
    this.setState({
      display: "0",
      operand1: undefined,
      operand2: undefined,
      operation: undefined
    });
  }
  render() {
    console.log(this.state);
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <input id="display" value={this.state.display} disabled />
        <button id="zero" onClick={() => this.numberClick(0)}>
          0
        </button>
        <button id="one" onClick={() => this.numberClick(1)}>
          1
        </button>
        <button id="two" onClick={() => this.numberClick(2)}>
          2
        </button>
        <button id="three" onClick={() => this.numberClick(3)}>
          3
        </button>
        <button id="four" onClick={() => this.numberClick(4)}>
          4
        </button>
        <button id="five" onClick={() => this.numberClick(5)}>
          5
        </button>
        <button id="six" onClick={() => this.numberClick(6)}>
          6
        </button>
        <button id="seven" onClick={() => this.numberClick(7)}>
          7
        </button>
        <button id="eight" onClick={() => this.numberClick(8)}>
          8
        </button>
        <button id="nine" onClick={() => this.numberClick(9)}>
          9
        </button>
        <button id="decimal" onClick={this.decimalClick}>
          .
        </button>
        <button id="add" onClick={() => this.operatorClick("+")}>
          +
        </button>
        <button id="subtract" onClick={() => this.operatorClick("-")}>
          -
        </button>
        <button id="multiply" onClick={() => this.operatorClick("*")}>
          *
        </button>
        <button id="divide" onClick={() => this.operatorClick("/")}>
          /
        </button>
        <button id="equals" onClick={this.equalsClick}>
          =
        </button>
        <button id="clear" onClick={this.clearClick}>
          AC
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
