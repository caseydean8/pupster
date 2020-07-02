import React, { Component } from "react";
import SelectBreed from "../SelectBreed";
// import Photo from "../Photo";

class Search extends Component {
  state = {
    value: "affenpinscher",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <SelectBreed
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* <Photo src= */}
      </div>
    );
  }
}

export default Search;
