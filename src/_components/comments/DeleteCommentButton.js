import React from "react";

import { commentActions } from "../../_actions";

import { useDispatch } from "react-redux";

function DeleteCommentButton({ id }) {
  const dispatch = useDispatch();

  function deleteComment() {
    dispatch(commentActions.deleteComment(id));
  }

  return (
    <div>
      <button onClick={deleteComment} className="button is-danger">
        Delete
      </button>
    </div>
  );
}

export default DeleteCommentButton;
