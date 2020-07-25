import React from "react";

function DeleteStoryButton({ deleteHandler }) {
  return (
    <button onClick={deleteHandler} className="button is-danger">
      Delete
    </button>
  );
}

export default DeleteStoryButton;
