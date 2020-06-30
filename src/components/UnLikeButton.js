import React from "react";

function UnLikeButton(props) {
  return (
    <button type="button" className="btn btn-danger btn-lg" onClick={() => props.handleClick(false)}>
      <i class="fa fa-thumbs-down" aria-hidden="true"></i>
    </button>
  );
}

export default UnLikeButton;
