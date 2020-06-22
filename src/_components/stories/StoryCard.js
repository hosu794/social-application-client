import React from "react";
import { Link } from "react-router-dom";
import { reduceText, formatDate } from "../../_helpers";

import PropTypes from "prop-types";

function StoryCard(props) {
  const storyUrl = `/stories/${props.id}`;

  return (
    <div className="column">
      <div className="card">
        <h1
          className="title is-size-2"
          style={{
            color: "#4a4a4a",
          }}
        >
          {props.title}
        </h1>
        <h1 className="is-size-3">Description</h1>
        <span className="is-size-5">{props.description}</span>
        <div className="level">
          <p className="level-item has-text-centered is-size-4">
            by {props.username}
          </p>
          <p className="level-item has-text-centered is-size-4">
            {formatDate(props.data)}
          </p>
        </div>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <button
                className="button is-danger
        "
              >
                Delete
              </button>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <Link to={storyUrl}>
                <button
                  className="button is-success
        "
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

StoryCard.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default StoryCard;
