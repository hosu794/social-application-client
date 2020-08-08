import React from "react";

import PropTypes from "prop-types";

function DeleteStoryButton({ deleteHandler }) {
  return (
    <button onClick={deleteHandler} className="button is-danger">
      Delete
    </button>
  );
}

DeleteStoryButton.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
};

export default DeleteStoryButton;
