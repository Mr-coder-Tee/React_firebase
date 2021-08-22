import React from "react";
import { Link } from "react-router-dom";
import Firebase from '../../Firebase/Firebase'




const Users = ({ RegUsers }) => {
  const db = Firebase.firestore();

  const isEmpty = RegUsers.length;

  const deleteUser=(_id)=>{
    db.collection('users').doc(_id).delete()
    .then(()=>{console.log("user deleted")})
    .catch((err)=>{console.log(err)})
  }

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
            <div key={user.id} className="userscard" >
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
                  <button onClick={()=>deleteUser(user.id)} type="submit" className="design-danger deletebtn">Delete</button>
                  <Link to={"/update/"+user.id} className="design-primary updatebtn">Update</Link>
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
