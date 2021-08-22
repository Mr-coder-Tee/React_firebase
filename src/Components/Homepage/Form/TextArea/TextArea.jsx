import React from "react";
import { ErrorMessage, useField } from "formik";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="col">
      <div className="inputbx textarea">
        <span className="text">{label}</span>
        <textarea
          className="input-size"
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

//{...field}
export default TextArea;
