import "./App.css";
import NavBar from "./Components/NavBar/NarBar";
import User from "./Components/User/User";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Banner from "./Components/Banner/Banner";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/users/:id">
            <User />
          </Route>
          <Route exact path="/newsfeed">
            <NewsFeed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
