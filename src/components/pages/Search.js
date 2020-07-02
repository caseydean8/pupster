import React, { Component } from "react";
import SelectBreed from "../SelectBreed";

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
      </div>
    );
  }
}

export default Search;
