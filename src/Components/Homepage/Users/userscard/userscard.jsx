import React from "react";

const userscard = ({ user }) => {
  return (
    <div className="userscard">
      <div className="hoverCard"></div>
      <div className="maindisplay">
        <div className="names">
          <h6>{user.name}</h6>
        </div>
        <div className="deletebtn">
          <button className="danger-design">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default userscard;
