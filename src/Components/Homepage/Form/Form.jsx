import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextArea from "./TextArea/TextArea";
import TextField from "./TextField/TextField";
import Firebase from "../../Firebase/Firebase";

const UserForm = ({createFirebaseUser}) => {
  // const [name,setName]=useState('');
  // const [surname,setSurname]=useState('');
  // const [age,setAge]=useState('');
  // const [gender,setGender]=useState('');
  // const [location,setLocation]=useState('');
  // const [description,setDescription]=useState('');
  
  const submitUser = (e) => {
      e.preventDefault();
    };
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
    <div className="form">
      <div className="heading">
        <h2>User Registration Form</h2>
      </div>
      <div className="formHolder">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            age: "",
            gender: "",
            location: "",
            describe: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            createFirebaseUser(
              values.name,
              values.surname,
              values.age,
              values.gender,
              values.location,
              values.describe
            );
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
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
