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
    value: "affenpinscher",
    searchResult: [],
  };

  dogSearch = (breed) => {
    API.search(breed)
      .then((res) => {
        breed
          ? this.setState({ searchResult: res.data.message })
          : this.setState({ result: res.data });
        // console.log(res.data);
        // console.log('search result in state', this.state.searchResult);
      })
      .catch((err) => console.log(err));
      // const searchedDogs = this.searchResult.map()
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
      // this.likeBack(true);
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

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state.value);
    event.preventDefault();
    this.dogSearch(this.state.value);
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
          <Route
            exact
            path="/search"
            render={(props) => (
              // {...props}
              <Search
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                src={this.state.searchResult}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
