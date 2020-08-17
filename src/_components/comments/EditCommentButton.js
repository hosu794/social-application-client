import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function EditCommentButton({ id }) {
  let commentEditUrl = `/comment/edit/${id}`;

  return (
    <Link to={commentEditUrl}>
      <button className="button is-info">Edit</button>
    </Link>
  );
}

EditCommentButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EditCommentButton;
