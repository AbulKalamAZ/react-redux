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

  componentDidUpdate() {
    console.log("Component Did Update!");
    fetch(`https://jsonplaceholder.typicode.com/${this.state.activeButton}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
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
