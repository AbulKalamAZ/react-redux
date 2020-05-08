import React, { Component } from "react";
import "./Adduser.scss";

export default class Adduser extends Component {
  state = {
    name: null,
    age: null,
    skill: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, skill } = this.state;

    if (name !== null && age !== null && skill !== null) {
      this.props.addUserMethod({
        name: name,
        age: age,
        skills: skill,
        id: Math.random(),
      });
    } else {
      console.log("enter all the value");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div className="add-user-form">
        <h2>Enter user details</h2>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Enter user's name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="age"
            placeholder="Enter user's age"
            onChange={this.handleChange}
          />
          <select id="skill" onChange={this.handleChange}>
            <option>Select skill</option>
            <option value="Reading">Reading</option>
            <option value="Writing">Writing</option>
            <option value="Drawing">Drawing</option>
            <option value="programming">Programming</option>
            <option value="Travelling">Travelling</option>
          </select>
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}
