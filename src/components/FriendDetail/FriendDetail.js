import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FriendDetail = () => {
  const [friends, setFriends] = useState({});
  const { friendId } = useParams();
  const history = useHistory();
  //   console.log(friendId);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  const seeAllFriends = () => {
    history.push("/friends");
  };

  return (
    <div>
      <h2>Hello From Friend Detail</h2>
      <div
        style={{
          border: "2px solid green",
          width: "30%",
          margin: "10px auto",
          padding: "10px",
        }}
      >
        <h3>Name : {friends.name}</h3>
        <p>
          <b>Phone: </b>
          {friends.phone}
        </p>
        <h4>Email: {friends.email}</h4>
        <p>
          <b>Works at: </b>
          {friends.company?.name}
        </p>
        <button
          style={{
            padding: "10px 10px",
            backgroundColor: "skyblue",
            color: "white",
            borderColor: "skyblue",
            fontWeight: "bold",
          }}
          onClick={seeAllFriends}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default FriendDetail;
