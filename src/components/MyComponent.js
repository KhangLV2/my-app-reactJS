// class components
// function components

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Jack",
    address: "Hoi Dan IT",
    age: 27,
  };

  //c1
  //   handleClick = (event) => {
  //     console.log(">> Click me my button");
  //     console.log("My name is ", this.state.name);
  //   };

  handleClick(event) {
    console.log(">> Click me my button");
    // console.log(" random ", Math.floor(Math.random() * 100 + 1));

    //merge State=> react class
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMouseOver(event) {
    console.log(event);
  }

  handleChangInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and I am {this.state.age}
        {/* <button onMouseOver={this.handleOnMouseOver}>Click me</button> */}
        {/* <button onClick={this.handleClick}>Click me</button> */}
        {/* C2 */}
        {/* <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button> */}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleChangInput(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
