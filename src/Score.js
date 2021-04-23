import React, { Component } from "react";

class Score extends Component {
  render() {
    const { numCorrect, numQuestions } = this.props;
    return (
      <p className="text">
        Your Score:
        {numCorrect}/{numQuestions}
      </p>
    );
  }
}

export default Score;
