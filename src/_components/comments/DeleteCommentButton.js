import React from "react";
import { commentActions } from "../../_actions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

function DeleteCommentButton({ handleDeleteComment }) {
  return (
    <button onClick={handleDeleteComment} className="button is-danger">
      Delete
    </button>
  );
}

DeleteCommentButton.propTypes = {
  handleDeleteComment: PropTypes.func.isRequired,
};

export default DeleteCommentButton;
