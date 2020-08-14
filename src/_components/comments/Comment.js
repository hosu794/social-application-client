import React from "react";

import { useDispatch, useSelector } from "react-redux";
import DeleteCommentButton from "./DeleteCommentButton";

function Comment({ comment }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const isUserExist = user ? user.id : null;
  const isUserIdentificationEqualStoryCreator =
    isUserExist === comment.createdBy.id;

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
              <DeleteCommentButton id={comment.id} />
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Comment;
