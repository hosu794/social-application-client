import React from "react";

function StoryCard(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <span>{props.description}</span>
      <p>{props.body}</p>
    </React.Fragment>
  );
}

export default StoryCard;
