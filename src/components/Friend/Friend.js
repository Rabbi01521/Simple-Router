import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { id, name, phone, website, address } = props.friend;

  const friend = {
    border: "2px solid goldenrod",
    padding: " 10px",
    borderRadius: "10px",
  };
  return (
    <div style={friend}>
      <h2>I am {name}</h2>
      <h5>Phone: {phone}</h5>
      <p>
        <b>Visit me: </b>
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>
      <p>I live in {address.city}</p>
      <Link to={`/friend/${id}`}>
        <button
          style={{
            padding: "10px 10px",
            backgroundColor: "skyblue",
            color: "white",
            borderColor: "skyblue",
            fontWeight: "bold",
          }}
        >
          Visit Me
        </button>
      </Link>
    </div>
  );
};

export default Friend;
