import React, { useEffect, useState } from "react";

<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
=======
import { useDispatch, useSelector } from "react-redux";

>>>>>>> create-comments-feature-vol-2
import { commentActions } from "../../_actions";

import Comment from "./Comment";

<<<<<<< HEAD
=======
import CreateComment from "./CreateComment";

>>>>>>> create-comments-feature-vol-2
function Comments({ id }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
<<<<<<< HEAD

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
=======
  const content = useSelector((state) => state.comment.content);
  const loading = useSelector((state) => state.comment.loading);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const isStoryHasComments = Array.isArray(content) && content.length;

  useEffect(() => {
    dispatch(commentActions.getCommentsByStoryId(id));
  }, [currentPage]);

  return (
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          {loggedIn ? (
            <div>
              <CreateComment id={id} />
            </div>
          ) : null}
          <h1 class="title">Comments</h1>
          {!loading ? content.map((item) => <Comment comment={item} />) : null}
          {!isStoryHasComments ? (
            <p className="is-size-4">Story hasn't comments!</p>
          ) : null}
        </div>
      </div>
>>>>>>> create-comments-feature-vol-2
    </section>
  );
}

export default Comments;
