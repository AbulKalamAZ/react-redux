import React from "react";
import "./User.scss";

export default function User(props) {
  const { users } = props;

  const formatSkills = (skills) => {
    let str = "";

    for (let i = 0; i < skills.length; i++) {
      if (i === skills.length - 1) {
        str += `${skills[i]}.`;
      } else if (i === skills.length - 2) {
        str += `${skills[i]} and `;
      } else {
        str += `${skills[i]}, `;
      }
    }

    return str;
  };
  return users.map((user) => {
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
        <div className="user" key={user.id}>
          <h1>Name: {user.name}</h1>
          <h3>Age: {user.age}</h3>
          <h3>Skills: {formatSkills(user.skills)}</h3>
        </div>
      );
    } else {
      return null;
    }
  });
}
