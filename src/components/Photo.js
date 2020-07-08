import React from "react";
import "./photo.css";

function Photo (props) {
  return (
    <div className="text-center">
      <img alt="dog" src={props.src} className="img-fluid" />
    </div>
  );
}

export default Photo;