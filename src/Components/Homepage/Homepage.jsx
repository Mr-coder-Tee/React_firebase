import React,{useState,useEffect} from "react";
import UserForm from "./Form/Form";
import Users from "./Users/Users";
import Banner from "../Banner/Banner";
import firebase from "firebase";
import Firebase from '../Firebase/Firebase'

const Homepage = ({createFirebaseUser}) => {
  const db = Firebase.firestore();
  const [RegUsers,setUsers]=useState([]);

  useEffect(()=>{
    let userInfo=[]
    db.collection('users').get()
    .then((res)=>{
        res.forEach(action=>{
            userInfo.push({...action.data(),id:action.id});
        })
        setUsers(userInfo);
    })
  },[])
  return (
    
    <div>
      <Banner />
      <div className="homepage">
        <UserForm createFirebaseUser={createFirebaseUser} />
        <Users RegUsers={RegUsers} />
      </div>
    </div>
  );
};

export default Homepage;
