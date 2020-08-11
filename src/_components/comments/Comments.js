import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { commentActions } from "../../_actions";

import Comment from "./Comment";

function Comments({ id }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const content = useSelector((state) => state.comment.content);
  const size = useSelector((state) => state.comment.totalPages);
  const countOfComments = content.filter((val) => val.id).length;
  const isMorePageToLoad = size - 1 !== currentPage;
  const isCommentsNotExists = Array.isArray(content) && content.length;

  useEffect(() => {
    dispatch(commentActions.clearComments());
    dispatch(commentActions.getCommentsByStoryId(id, currentPage));
  }, [currentPage]);

  const loadMoreComments = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Story's comments</h1>
          {content.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          {!isCommentsNotExists ? <p>Story doesn't have a comments</p> : null}
        </div>
      </div>
      {isMorePageToLoad ? (
        <div
          style={{
            width: "10%",
          }}
          className="container"
        >
          {isCommentsNotExists ? (
            <button className="button is-info" onClick={loadMoreComments}>
              Load More
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default Comments;
