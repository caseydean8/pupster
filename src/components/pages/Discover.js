import React from "react";
import Photo from "../Photo";
import LikeButton from "../LikeButton";
import UnLikeButton from "../UnLikeButton";

function Discover(props) {
  console.log(props);
  // state = {
  //   result: {},
  //   friends: 0,
  //   string: "",
  // };

  // componentDidMount = () => {
  //   props.dogSearch();
  // }

  // dogSearch = () => {
  //   API.search()
  //     .then((res) => {
  //       this.setState({ result: res.data });
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // handleClick = (boolean) => {
  //   console.log(boolean);
  //   if (boolean) this.friendMatch();
  //   props.dogSearch();
  // };

  // friendMatch = () => {
  //   const rand1 = Math.floor(Math.random() * 3) + 1;
  //   const rand2 = Math.floor(Math.random() * 3) + 1;
  //   if (rand1 === rand2) {
  //     this.likeBack(true);
  //     let friend = this.state.friends;
  //     this.setState({ friends: friend + 1, string: "He Likes You!" });
  //   } else {
  //     this.setState({ string: "" });
  //   }
  //   console.log(this.state.friends);
  // };

  // stringGrammar = () => {
  //   return props.state.friends === 1 ? "friend" : "friends";
  // };

  // render() {
    return (
      <div>
        <Photo src={props.src} />
        {/* Make these buttons render after picture */}
        <LikeButton handleClick={props.handleClick} />
        <UnLikeButton handleClick={props.handleClick} />
        <p>
          {props.string}<br></br>
          You have {props.friends} dog {props.stringGrammar}
        </p>
      </div>
    );
  // }
}

export default Discover;
