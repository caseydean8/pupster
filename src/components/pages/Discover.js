import React, { Component } from "react";
import API from "../../utils/API";
import Photo from "../Photo";
import LikeButton from "../LikeButton";
import UnLikeButton from "../UnLikeButton";

class Discover extends Component {
  state = {
    result: {},
    friends: 0,
    // string: "friends",
  };

  componentDidMount() {
    this.dogSearch();
  }

  dogSearch = () => {
    API.search()
      .then((res) => {
        this.setState({ result: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
      let friend = this.state.friends;
      // this.stringGrammar();
      this.setState({ friends: friend + 1 });
      console.log("match");
    }
    console.log(this.state.friends);
  };

  stringGrammar = () => {
    return this.state.friends === 1 ? "friend" : "friends";
  };

  render() {
    return (
      <div>
        <Photo src={this.state.result.message} />
        <LikeButton handleClick={this.handleClick} />
        <UnLikeButton handleClick={this.handleClick} />
        <p>
          You have {this.state.friends} dog {this.stringGrammar()}
        </p>
      </div>
    );
  }
}

export default Discover;
