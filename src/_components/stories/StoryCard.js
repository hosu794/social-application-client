import React from "react";

import { reduceText } from "../../_helpers";

function StoryCard(props) {
  return (
    <div className="column">
      <div className="card">
        <h1
          className="title"
          style={{
            color: "#4a4a4a",
          }}
        >
          {props.title}
        </h1>
        <span>{props.description}</span>
        <p>{reduceText(props.body)}</p>
        <div className="level">
          <div className="level-right">{props.username}</div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
