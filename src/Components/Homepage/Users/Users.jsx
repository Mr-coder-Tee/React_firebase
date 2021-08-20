import React from "react";
import myUserCard from "./userscard/userscard";

const Users = ({ RegUsers }) => {
  const isEmpty = RegUsers.length;

  return (
    <div className="users">
      <div className="heading">
        <h2>Users</h2>
      </div>
      {isEmpty === 0 ? (
        <h3>empty</h3>
      ) : (
        <div>
          {RegUsers.map((user) => (
            <div className="userscard">
              <div className="hoverCard">
                <p>
                  {
                  "Name:"+user.name
                  } 
                </p>
                <p>
                  {
                  "Surname:"+user.surname
                  } 
                </p>
                <p>
                  {
                  "Age:"+user.age
                  } 
                </p>
                <p>
                  {
                  "Gender:"+user.gender
                  } 
                </p>
                <p>
                  {
                  "Location:"+user.location
                  } 
                </p>
                <p>
                  {
                  "Description:"+user.description
                  } 
                </p>
              </div>
              <div className="maindisplay">
                <div className="names">
                  <h3>{user.name + " " + user.surname}</h3>
                </div>
                <div className="deletebtnbx">
                  <button className="design-danger deletebtn">Delete</button>
                  <button className="design-primary updatebtn">Update</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
