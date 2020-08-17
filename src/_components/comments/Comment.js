import React from "react";

import { useDispatch, useSelector } from "react-redux";
import DeleteCommentButton from "./DeleteCommentButton";
import EditCommentButton from "./EditCommentButton";
import { commentActions } from "../../_actions";
import PropTypes from "prop-types";
import { IComment, IUser } from "../../_types";

function Comment({ comment }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const isUserExist = user ? user.id : null;
  const isUserIdentificationEqualStoryCreator =
    isUserExist === comment.createdBy.id;

  function handleDeleteComment() {
    dispatch(commentActions.deleteComment(comment.id));
  }

  return (
    <div className="column">
      <div className="card">
        <nav className="level">
          <div class="level-item has-text-centered">
            <div className="is-size-5">{comment.body}</div>
          </div>
        </nav>
        <nav className="level">
          <div class="level-item has-text-centered">
            <div className="is-size-6">
              created by <b>{comment.createdBy.username}</b>
            </div>
          </div>
          <div className="level-item has-text-centered">
            {isUserIdentificationEqualStoryCreator ? (
              <DeleteCommentButton handleDeleteComment={handleDeleteComment} />
            ) : null}
          </div>
          <div className="level-item has-text-centered">
            {isUserIdentificationEqualStoryCreator ? (
              <EditCommentButton id={comment.id} />
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.instanceOf(IComment).isRequired,
  user: PropTypes.instanceOf(IUser),
  isUserExist: PropTypes.number,
  isUserIdentificationEqualStoryCreator: PropTypes.bool,
};

Comment.defaultProps = {
  comment: null,
  user: {},
  isUserExist: undefined,
  isUserIdentificationEqualStoryCreator: false,
};

export default Comment;
