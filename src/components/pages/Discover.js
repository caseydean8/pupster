import React, { Component } from "react";
import API from "../../utils/API";
import Photo from "../Photo";

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
    return <Photo src={this.state.result.message} />;
  }
}

export default Discover;
