// class components
// function components

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Jack",
    address: "Hoi Dan IT",
    age: 27,
  };

  // JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and I am from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
