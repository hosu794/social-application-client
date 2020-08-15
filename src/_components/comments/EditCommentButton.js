import React from "react";

import { Link } from "react-router-dom";

function EditCommentButton({ id }) {
  let commentEditUrl = `/comment/edit/${id}`;

  return (
    <Link to={commentEditUrl}>
      <button className="button is-info">Edit</button>
    </Link>
  );
}

export default EditCommentButton;
