import React from "react";
import "./User.scss";

export default function User(props) {
  const { users, deleteUser } = props;
  console.log(users);

  return users.map((user, index) => {
    //using ternary operator
    // return user.age > 20 ? (
    //   <div className="user" key={user.id}>
    //     <h1>Name: {user.name}</h1>
    //     <h3>Age: {user.age}</h3>
    //     <h3>Skills: {formatSkills(user.skills)}</h3>
    //   </div>
    // ) : null;

    //using if else
    if (user.age > 20) {
      return (
        <div className="user" key={index}>
          <h1>Name: {user.name}</h1>
          <h3>Age: {user.age}</h3>
          <h3>Skills: {user.skills}</h3>
          <button
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            delete
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
}
