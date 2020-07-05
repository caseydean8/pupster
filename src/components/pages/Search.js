import React from "react";
import SelectBreed from "../SelectBreed";
import Photo from "../Photo";

// ShowImage = (props) => {
//   console.log(props.src, "in Search component");
//   if (props.src) {
//     props.src.forEach((item) => {
//       console.log(item);
//       return <Photo src={item} />;
//     });
//   } else {
//     return null;
//   }
// }
function Search(props) {
  // ShowImage = () => {
  //   console.log(props.src, "in Search component");
  //   if (props.src.length > 0) {
  //     // return <Photo src={props.src.map(item => item)} />
  //     props.src.forEach((item) => {
  //       console.log(item);
  //       return <Photo src={item} />;
  //     });
  //   } else {
  //     console.log(props.src);
  //     return null;
  //   }
  // }
  // state = {
  //   value: "affenpinscher",
  // };

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });
  // };

  // handleSubmit = (event) => {
  //   console.log(this.state.value);
  //   event.preventDefault();
  // };

  // render() {
  return (
    <div>
      <h1>Search Page</h1>
      <SelectBreed
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      {/* <ShowImage /> */}
      {props.src.map((item) => (
        <Photo src={item} />
      ))}
    </div>
  );
  // }
}

export default Search;
