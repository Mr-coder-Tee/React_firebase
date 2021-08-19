import React from "react";
import UserForm from "./Form/Form";
import Users from "./Users/Users";
import Banner from "../Banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="homepage">
        <UserForm />
        <Users />
      </div>
    </div>
  );
};

export default Homepage;
