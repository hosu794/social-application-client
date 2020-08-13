import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { commentActions } from "../../_actions";

import Comment from "./Comment";

import CreateComment from "./CreateComment";

function Comments({ id }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const content = useSelector((state) => state.comment.content);
  const loading = useSelector((state) => state.comment.loading);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

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
        </div>
      </div>
    </section>
  );
}

export default Comments;
