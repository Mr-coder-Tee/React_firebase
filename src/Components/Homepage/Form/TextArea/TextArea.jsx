import React from 'react';
import { ErrorMessage,useField } from 'formik';

const TextArea = ({label,...props}) => {
    return ( <div className="col">
       <div className="inputbx textarea">
           <span className="text">{label}</span>
                <textarea className="input-size"  
                 {...props}
                 autoComplete="off" 
                 required="required"/>
            </div> 
    </div> );
}
 

//{...field}
export default TextArea;