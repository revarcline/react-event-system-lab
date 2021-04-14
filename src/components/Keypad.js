import React from "react";

class EyesOnMe extends React.Component {
  focusButton = () => console.log("Good!");

  blurButton = () => console.log("Hey! Eyes on me!");

  render() {
    return (
      <button onFocus={this.focusButton} onBlur={this.blurButton}>
        Eyes on me, please!
      </button>
    );
  }
}

export default EyesOnMe;
