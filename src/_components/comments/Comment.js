import React from "react";

<<<<<<< HEAD
function Comment({ comment }) {
=======
import { useDispatch, useSelector } from "react-redux";
import DeleteCommentButton from "./DeleteCommentButton";
import EditCommentButton from "./EditCommentButton";

function Comment({ comment }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const isUserExist = user ? user.id : null;
  const isUserIdentificationEqualStoryCreator =
    isUserExist === comment.createdBy.id;

>>>>>>> create-comments-feature-vol-2
  return (
    <div className="column">
      <div className="card">
        <nav className="level">
<<<<<<< HEAD
          <div className="level-item has-text-centered">
            <div>
              <p className="is-size-5">{comment.body}</p>
            </div>
          </div>
        </nav>
        <nav className="level">
          <div className="level-item level-right">
            <div>
              <p className="is-size-5">by {comment.createdBy.username}</p>
            </div>
          </div>
=======
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
          <div className="level-item has-text-centered">
            {isUserIdentificationEqualStoryCreator ? (
              <EditCommentButton id={comment.id} />
            ) : null}
          </div>
>>>>>>> create-comments-feature-vol-2
        </nav>
      </div>
    </div>
  );
}

export default Comment;
