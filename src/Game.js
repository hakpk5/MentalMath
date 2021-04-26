import React, { Component } from "react";
class Game extends Component {
  constructor(props) {
    super(props);
    const getNewValues = this.generateNewValues();
    this.state = {
      value1: getNewValues[0],
      value2: getNewValues[1],
      value3: getNewValues[2],
      proposedAnswer: getNewValues[3],
    };
  }
  generateNewValues = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };
  updateState = (newValues) => {
    this.setState((currState) => ({
      value1: newValues[0],
      value2: newValues[1],
      value3: newValues[2],
      proposedAnswer: newValues[3],
    }));
  };
  handleAnswer = (event) => {
    const newValues = this.generateNewValues();
    if (
      event.target.name === "True" &&
      this.state.value1 + this.state.value2 + this.state.value3 ===
        this.state.proposedAnswer
    ) {
      this.props.handleAnswer(true);
    } else if (
      event.target.name === "True" &&
      this.state.value1 + this.state.value2 + this.state.value3 !==
        this.state.proposedAnswer
    ) {
      this.props.handleAnswer(false);
    } else if (
      event.target.name === "False" &&
      this.state.value1 + this.state.value2 + this.state.value3 !==
        this.state.proposedAnswer
    ) {
      this.props.handleAnswer(true);
    } else if (
      event.target.name === "False" &&
      this.state.value1 + this.state.value2 + this.state.value3 ===
        this.state.proposedAnswer
    ) {
      this.props.handleAnswer(false);
    }
    this.updateState(newValues);
  };
  render() {
    return (
      <React.Fragment>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="True">
          True
        </button>
        <button onClick={this.handleAnswer} name="False">
          False
        </button>
      </React.Fragment>
    );
  }
}

export default Game;
