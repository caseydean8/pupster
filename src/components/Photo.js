import React from "react";

function Photo (props) {
  return (
    <div className="text-center">
      <img alt="dog" src={props.src} className="img-fluid" style={{ margin: "0 auto" }}/>
    </div>
  );
}

export default Photo;