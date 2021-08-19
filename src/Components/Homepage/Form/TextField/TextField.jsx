import React from 'react';
import { ErrorMessage,useField } from 'formik';


const TextField = ({label,...props}) => {
    return ( 
            <div className="col">
                <div className="inputbx">
                    <span className="text">{label}</span>
                    <input className="input-size is-invalid" 
                   {...props}
                    autoComplete="off"
                    required="required"
                    />
                </div>
            </div>
        );
}
 // {...field}
export default TextField;