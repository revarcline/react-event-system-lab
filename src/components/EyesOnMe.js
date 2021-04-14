import React from "react";

class Keypad extends React.Component {
  passwordWatcher = () => console.log("Entering password...");

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.passwordWatcher} />
      </div>
    );
  }
}

export default Keypad;
