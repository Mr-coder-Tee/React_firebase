import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="col">
      <div className="inputbx">
        <span className="text">{label}</span>
        <input
          className="input-size is-invalid"
          {...field}
          {...props}
          autoComplete="off"
        />
      </div>
      <div className="div">
      <ErrorMessage name={field.name} component="div" className="error" />
      </div>
    </div>
  );
};
// {...field}
export default TextField;
