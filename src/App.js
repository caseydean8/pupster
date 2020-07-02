import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import API from "../src/utils/API";

class App extends Component {
  state = {
    result: {},
    friends: 0,
    string: "",
  };

  dogSearch = (breed) => {
    API.search(breed)
      .then((res) => {
        this.setState({ result: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    this.dogSearch();
  };

  handleClick = (boolean) => {
    console.log(boolean);
    if (boolean) this.friendMatch();
    this.dogSearch();
  };

  friendMatch = () => {
    const rand1 = Math.floor(Math.random() * 3) + 1;
    const rand2 = Math.floor(Math.random() * 3) + 1;
    if (rand1 === rand2) {
      this.likeBack(true);
      let friend = this.state.friends;
      this.setState({ friends: friend + 1, string: "He Likes You!" });
    } else {
      this.setState({ string: "" });
    }
    console.log(this.state.friends);
  };

  stringGrammar = () => {
    return this.state.friends === 1 ? "friend" : "friends";
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/discover"
            // component={Discover}
            render={(props) => (
              <Discover
                {...props}
                src={this.state.result.message}
                handleClick={this.handleClick}
                string={this.state.string}
                friends={this.state.friends}
                stringGrammar={this.stringGrammar()}
              />
            )}
          />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
