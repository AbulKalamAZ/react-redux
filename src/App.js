import React from "react";
import "./App.scss";

import User from "./components/user/User";
import AddUser from "./components/add-user/Adduser";

class App extends React.Component {
  state = {
    isShowDashboard: true,
    users: [
      {
        name: "Azad",
        age: "28",
        skills: "writing",
        id: 0,
      },
      {
        name: "Azad",
        age: "28",
        skills: "programming",
        id: 1,
      },
      {
        name: "Kalam",
        age: "31",
        skills: "reading",
        id: 2,
      },
      {
        name: "Sabrina",
        age: "22",
        skills: "Crrafting",
        id: 3,
      },
      {
        name: "Alishba",
        age: "3",
        skills: "making fun",
        id: 4,
      },
    ],
  };

  addUser = (user) => {
    let users = this.state.users;
    let isShowDashboard = this.state.isShowDashboard;

    this.setState({
      users: users.concat(user),
      isShowDashboard: !isShowDashboard,
    });
    console.log("logged from app");
  };

  handleViewChange = () => {
    this.setState((state) => {
      return {
        isShowDashboard: !state.isShowDashboard,
      };
    });
  };

  render() {
    const { isShowDashboard, users } = this.state;
    return (
      <div className="App">
        <div className="navbar">
          {isShowDashboard ? (
            <button onClick={this.handleViewChange}>Add User</button>
          ) : null}
        </div>
        <div className="users">
          {isShowDashboard ? (
            <User users={users} />
          ) : (
            <AddUser addUserMethod={this.addUser} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
