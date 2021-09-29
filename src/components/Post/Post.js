import React from "react";
import { useHistory } from "react-router";

const Post = (props) => {
  const { id, title } = props.post;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div
      style={{
        border: "2px solid gold",
        width: "50%",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <h4>Title: {title}</h4>
      <button
        style={{
          padding: "10px 10px",
          backgroundColor: "skyblue",
          color: "white",
          borderColor: "skyblue",
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        See More
      </button>
    </div>
  );
};

export default Post;
