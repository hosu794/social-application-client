import React from "react";

function Comment({ comment }) {
  return (
    <div className="column">
      <div className="card">
        <nav className="level">
          <div class="level-item has-text-centered">
            <div className="is-size-5">{comment.body}</div>
          </div>
        </nav>
        <nav className="level">
          <div class="level-item level-right">
            <div className="is-size-6">{comment.createdBy.username}</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Comment;
