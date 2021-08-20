import React from 'react';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import TextArea from './TextArea/TextArea';
import TextField from './TextField/TextField';


const UserForm = () => {
    return ( 
        <div className="form">
            <div className="heading">
                <h2>User Registration Form</h2>
            </div>
            <div className="formHolder">
                <Formik
                    initialValues={
                        {
                            name:'',
                            surname:'',
                            age:'',
                            gender:'',
                            location:'',
                            describe:''
                        }
                    }
                >
                    <Form>

                        <div className="row">
                        <TextField label="Name"  onChance="" name="name" type="text" placeholder="Name"/>
                                <TextField label="Surname" name="surname" type="text"   placeholder="Surname"/>
                        </div>
                        <div className="row">
                        <TextField label="Age" name="age" type="text"  placeholder="Age"/>
                                <TextField label="Gender" name="gender" type="text"  placeholder="Gender"/>
                        </div>
                        <div className="row">
                        <TextArea label="Type Location" name="location" type="text"  placeholder="Location"/>

                        </div>
                        <div className="row">
                        <TextArea label="Describe Yourself" name="describe" type="text"  placeholder="Description"/>

                        </div>
                        <div className="formbtn">
                            <button type="submit" className="btnSubmit design-primary">Submit</button>
                        </div>
                    </Form>

                </Formik>
            </div>
         </div> 
    );
}
 
export default UserForm;