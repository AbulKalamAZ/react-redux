import React from "react";
import "./App.scss";

import User from "./components/user/User";

class App extends React.Component {
  state = {
    users: [
      {
        name: "Azad",
        age: "28",
        skills: ["reading", "writing", "programming"],
        id: 1,
      },
      {
        name: "Kalam",
        age: "31",
        skills: ["reading", "writing", "programming"],
        id: 2,
      },
      {
        name: "Sabrina",
        age: "22",
        skills: ["reading", "writing", "drawing", "Crrafting"],
        id: 3,
      },
      {
        name: "Alishba",
        age: "3",
        skills: ["making fun", "entertaining"],
        id: 4,
      },
    ],
  };

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <User users={users} />
      </div>
    );
  }
}

export default App;
