import React, { Component } from "react";
import API from "../../utils/API";
import Photo from "../Photo";
import LikeButton from "../LikeButton";
import UnLikeButton from "../UnLikeButton";

class Discover extends Component {
  state = {
    result: {},
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

  render() {
    return (
      <div>
        <Photo src={this.state.result.message} />
        <LikeButton />
        <UnLikeButton />
      </div>
    );
  }
}

export default Discover;
