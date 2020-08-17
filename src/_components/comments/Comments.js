import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../../_actions";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import PropTypes from "prop-types";
import { IComment } from "../../_types";

function Comments({ id }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const content = useSelector((state) => state.comment.content);
  const loading = useSelector((state) => state.comment.loading);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const isStoryHasComments = Array.isArray(content) && content.length;

  const getCommentsByStoryId = async () => {
    await dispatch(commentActions.getCommentsByStoryId(id, currentPage));
  };

  useEffect(() => {
    getCommentsByStoryId();
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
    </section>
  );
}

Comments.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.arrayOf(IComment),
  loading: PropTypes.bool,
  loggedIn: PropTypes.bool,
  isStoryHasComments: PropTypes.bool,
};

Comment.defaultProps = {
  id: null,
  content: [],
  loading: false,
  loggedId: false,
  isStoryHasComments: false,
};

export default Comments;
