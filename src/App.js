import React, { useState } from 'react';
import "./App.css";
import NavBar from "./Components/NavBar/NarBar";
import Article from "./Components/NewsFeed/article";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Updateuserifo from "./Components/Updateuserifo/Updateuserifo";
import Homepage from "./Components/Homepage/Homepage";
import Firebase from './Components/Firebase/Firebase'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const db = Firebase.firestore();
  const [userId,setUserId]=useState('');
  const getUserId=(_id)=>{
    setUserId(_id)
  }
  const createFirebaseUser = (
    _name,
    _surname,
    _age,
    _gender,
    _location,
    _description
  ) => {
    db.collection("users")
      .add({
        name: _name,
        surname: _surname,
        age: _age,
        gender: _gender,
        location: _location,
        description: _description,
      })
      .then((res) => {
        console.log("user created");
      })
      .catch((err) => {
        console.log("error->", err);
      });
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage createFirebaseUser={createFirebaseUser} getUserId={getUserId}/>
          </Route>
          <Route exact path="/newsfeed/article/:id">
            <Article />
          </Route>
          <Route exact path="/newsfeed">
            <NewsFeed />
          </Route>
          <Route exact path="/update">
            <Updateuserifo userId={userId}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
