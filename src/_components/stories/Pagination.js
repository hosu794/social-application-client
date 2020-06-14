import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "bulma";
import axios from "axios";
import Pagination from "bulma-pagination-react";
import StoryCard from "./StoryCard";
import StoriesCards from "./StoriesCards";

import { IStory } from "../../_types";

import { storyActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";

function Pager() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories);
  var page = stories.page;
  const size = stories.size;
  const totalPages = stories.totalPages;
  const loading = stories.loading;

  const [isPageChanged, setIsPageChanged] = useState(0);

  const content = stories.content;

  const isLessThanZero = page === -1;
  const isMoreThanTotalPages = page > totalPages;

  useEffect(() => {
    if (isLessThanZero) {
      page = page + 1;
    } else if (isMoreThanTotalPages) {
      page = page - 1;
    } else {
      dispatch(storyActions.getPagedStories(page));
    }
  }, [isPageChanged]);

  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          {loading ? (
            <h1 className="title is-size-1">Loading...</h1>
          ) : (
            <StoriesCards />
          )}
          <Pagination
            pages={totalPages}
            currentPage={page + 1}
            onChange={(page) => {
              setIsPageChanged(page);
              dispatch(storyActions.changePage(page - 1));
            }}
          />
        </div>
      </div>
    </section>
  );
}

Pager.propTypes = {
  storyActions: PropTypes.object,
  stories: PropTypes.shape({
    size: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    error: PropTypes.any.isRequired,
    casting: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    currentPage: PropTypes.instanceOf(IStory),
    page: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    content: PropTypes.arrayOf(IStory),
  }),
};

export default Pager;
