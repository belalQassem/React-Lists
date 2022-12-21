import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <span className="countValue">{this.props.count}</span>
        <button className="decrement" onClick={() => this.props.decrement(this.props.id, this.props.steps)
          }
        >
          -
        </button>
        <button
          className="increment"
          onClick={() =>
            this.props.increment(this.props.id, this.props.steps)
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
