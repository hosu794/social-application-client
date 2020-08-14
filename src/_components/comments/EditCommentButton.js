import React from "react";

import { Link } from "react-router-dom";

function EditCommentButton({ id }) {
  let commentEditUrl = `/comment/edit/${id}`;

  return (
    <div>
      <Link to={commentEditUrl}>
        <button className="button is-info">Edit</button>
      </Link>
    </div>
  );
}

export default EditCommentButton;
