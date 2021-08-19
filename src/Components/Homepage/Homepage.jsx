import React from "react";
import Form from "./Form/Form";
import Users from "./Users/Users";
import Banner from "../Banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="homepage">
        <Form />
        <Users />
      </div>
    </div>
  );
};

export default Homepage;
