import React, { Component } from "react";
import "./Welcome.scss";

export default class Welcome extends Component {
  constructor(props) {
    console.log("Constructor!");
    super(props);
    this.state = {
      activeButton: "users",
    };
  }

  handleButton = (btn) => {
    this.setState((state) => ({
      activeButton: btn,
    }));
  };

  componentDidMount() {
    console.log("Component Did Mount!");

    fetch(`https://jsonplaceholder.typicode.com/${this.state.activeButton}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.activeButton === this.state.activeButton) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update!");
    if (prevState.activeButton !== this.state.activeButton) {
      fetch(`https://jsonplaceholder.typicode.com/${this.state.activeButton}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    // console.log("prevProps", prevState.activeButton);
    // console.log("currState", this.state.activeButton);
  }

  render() {
    console.log("Render!");
    return (
      <>
        <div className="container">
          <div className="welcome-board">
            <button onClick={() => this.handleButton("posts")}>Posts</button>
            <button onClick={() => this.handleButton("users")}>Users</button>
            <button onClick={() => this.handleButton("comments")}>
              Comments
            </button>
          </div>

          <h2>{this.state.activeButton}</h2>
        </div>
      </>
    );
  }
}
