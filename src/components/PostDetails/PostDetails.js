import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h4>Hello Post</h4>
      <div
        style={{
          border: "1px solid gold",
          padding: "10px",
          width: "50%",
          margin: "10px auto",
        }}
      >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to="/home">See All Post</Link>
      </div>
    </div>
  );
};

export default PostDetails;
