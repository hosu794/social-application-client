import React from "react";

function Comment({ comment }) {
  return (
    <div className="column">
      <div className="card">
        <nav className="level">
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
        </nav>
      </div>
    </div>
  );
}

export default Comment;
