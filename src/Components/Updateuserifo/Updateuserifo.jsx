import React from 'react'
import Firebase from '../Firebase/Firebase'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import profile from '../../images/userprofile.png'
import background from '../../images/background.jpg'


const Updateuserifo = () => {
    const db = Firebase.firestore();
    const {id:uid}=useParams();
    const [data, setdata] = useState({})


    useEffect(()=>{
        let userInfo=[]
        db.collection('users').doc(uid).get()
        .then((res)=>{setdata({...res.data(),id:res.id})})
        .catch((err)=>{console.log(err)})
        .finally(()=>{console.log('finish')})
      },[])



    return ( 
    <div className="Updateuserifo">
        <div className="userCard">
            <div className="mLablogo">
                <h2><strong>m</strong>lab user</h2>
            </div>
            <div className="userdetails">
                <div className="profilebx">
                    <img src={profile} alt="profile" />
                </div>
                <div className="userContent">
                    <p>Names: <strong>{data.name+" "+data.surname}</strong></p>
                    <p>Age: <strong>{data.age}</strong></p>
                    <p>Location: <strong>{data.location}</strong></p>
                    <p>Description: <strong>{data.description}</strong></p>
                </div>
            </div>
            <div className="updateCard">

            </div>
        </div>
    </div> );
}
 
export default Updateuserifo;