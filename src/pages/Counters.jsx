import "./style.css";
import Counter from "../components/counter";
import React, { Component } from "react";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 17 },
  { id: 3, count: 0, steps: 8 },
  { id: 4, count: 0, steps: 20 },
];

export default class Counters extends Component {
  state = {
    counters,
  };

  decrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
             if (item.count > 0) {
              return { ...item, count: item.count - steps };
            }
            return item;
          }
          return item;
        }),
      };
    });
  };

  increment = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),

      };
    });
  };
  render() {
    return (
      <div className="counters">
        {this.state.counters.map((item) => (<Counter key={item.id}{...item} decrement={this.decrement} increment={this.increment}
          />
        ))}
      </div>
    );
  }
}
