import React from "react";
import { Link } from "react-router-dom";
import { reduceText, formatDate } from "../../_helpers";

import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { storyActions } from "../../_actions";
import DeleteStoryButton from "./DeleteStoryButton";

function StoryCard(props) {
  const storyUrl = `/stories/${props.id}`;
  const storyUrlEdit = `/stories/edit/${props.id}`;
  const user = useSelector((state) => state.user.user);
  const isUserExist = user ? user.id : null;
  const isUserIdentificationIsEqualStoryCreator = isUserExist === props.userId;
  const dispatch = useDispatch();

  function deleteHandler() {
    dispatch(storyActions.deleteStory(props.id));
  }

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
          {isUserIdentificationIsEqualStoryCreator ? (
            <div class="level-item has-text-centered">
              <div>
                <DeleteStoryButton deleteHandler={deleteHandler} />
              </div>
            </div>
          ) : null}
          {isUserIdentificationIsEqualStoryCreator ? (
            <div class="level-item has-text-centered">
              <div>
                <Link to={storyUrlEdit}>
                  <button className="button is-info">Edit</button>
                </Link>
              </div>
            </div>
          ) : null}
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
    user: PropTypes.object.isRequired,
  }),
};

export default StoryCard;
