import React from "react";

import { commentActions } from "../../_actions";

import { useDispatch } from "react-redux";

function DeleteCommentButton({ handleDeleteComment }) {
  return (
    <button onClick={handleDeleteComment} className="button is-danger">
      Delete
    </button>
  );
}

export default DeleteCommentButton;
