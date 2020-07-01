import React from "react";

function LikeButton(props) {
  return (
    <button type="button" className="btn btn-success btn-lg" onClick={() => props.handleClick(true)}>
      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
    </button>
  );
}

export default LikeButton;
