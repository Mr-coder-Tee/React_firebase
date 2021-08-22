import React from 'react'
import Firebase from '../Firebase/Firebase'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import profile from '../../images/userprofile.png'

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
                <h3><strong>mLab</strong> user</h3>
            </div>
            <div className="userdetails">
                <div className="profilebx">
                    <img src={profile} alt="profile" />
                </div>
                <div className="userContent">
                    <p>Names: <strong>{data.name+" "+data.surname}</strong></p>
                    <p>Age: <strong>{data.age}</strong></p>
                    <p>Location: <strong>{data.location}</strong></p>
                    <p>Description: <strong>{data.describe}</strong></p>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Updateuserifo;