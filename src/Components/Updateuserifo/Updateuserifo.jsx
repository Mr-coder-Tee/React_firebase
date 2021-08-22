import React from 'react'
import Firebase from '../Firebase/Firebase'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';

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



    return ( <div className="Updateuserifo">
        user: {data.name}
    </div> );
}
 
export default Updateuserifo;