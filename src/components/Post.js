import React from "react";
import "./Post.css"
function Post(props) {
  return (
    <div className="main">
      <div className="main-h1">
        <h1>{props.title}</h1>
      </div>
      <div className="main-img">
        <img src={props.image} alt="img" />
      </div>

    </div>
  );
}

export default Post;
