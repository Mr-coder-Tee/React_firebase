import React from 'react'
import Firebase from '../Firebase/Firebase'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import profile from '../../images/userprofile.png'
import background from '../../images/background.jpg'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from '../Homepage/Form/TextField/TextField';
import TextArea from '../Homepage/Form/TextArea/TextArea';

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


      const updateUser=()=>{
          db.collection.doc(uid).update({
            name:"name",
            surname:"surname",
            age:12,
            gender:"Female",
            location:"location",
            description:"description"

          })
      }

      const validate = Yup.object({
        name: Yup.string().required("enter valid name") ,
        surname: Yup.string().required("enter valid surname"),
        age: Yup.number().required("enter valid age"),
        gender: Yup.string()
        .required("enter gender (Male or Famale)")
        .matches(
            /^(Male)|(Female)$/,
            "Please enter a valid gender as Male or Female"
            ),
            location: Yup.string()
            .max(15, "Enter your town or city as your location")
            .required("Enter Location"),
            describe: Yup.string()
            .max(30, "Use less than 30 characters")
            .required("Enter Location"),
        });


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
        </div>
            <div className="updateCard">
            <div className="mLablogo">
                <h2>Update user details</h2>
                <div className="formHolder">
        <Formik
          initialValues={{
              
            name: '',
            surname: '',
            age: '',
            gender: '',
            location: '',
            describe: '',
          }}


          validationSchema={validate}


          onSubmit={(values) => {
            db.collection('users').doc(uid).update({
                name:values.name,
                surname:values.surname,
                age:values.age,
                gender:values.gender,
                location:values.location,
                description:values.describe
    
              }).then(()=>{console.log("user updated")})
              .catch((err)=>{console.log(err)})
          }}
        >
          <Form>
            <div className="row">
              <TextField
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <TextField
                label="Surname"
                name="surname"
                type="text"
                placeholder="Surname"
              />
            </div>
            <div className="row">
              <TextField label="Age" name="age" type="text" placeholder="Age" />
              <TextField
                label="Gender"
                name="gender"
                type="text"
                placeholder="Gender"
              />
            </div>
            <div className="row">
              <TextArea
                label="Type Location"
                name="location"
                type="text"
                placeholder="Location"
              />
            </div>
            <div className="row">
              <TextArea
                label="Describe Yourself"
                name="describe"
                type="text"
                placeholder="Description"
              />
            </div>
            <div className="formbtn">
            <button type="submit" className="btnSubmit design-primary">
                update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
                
            </div>
            </div>
    </div> );
}
 
export default Updateuserifo;