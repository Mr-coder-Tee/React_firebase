import React from "react";

const Users = ({ RegUsers }) => {
  const isEmpty = RegUsers.length;

  return (
    <div className="users">
      <div className="heading">
        <h2>Users</h2>
      </div>
      <div>
        
      </div>


        {
            isEmpty===0?(
                <h3>empty</h3>
            ):
            (
                <ul>
                {
                    RegUsers.map((user) => (
                      <li>{user.name}</li>
                    ))
                }
            </ul>
            )
        }



    </div>
  );
};

export default Users;
