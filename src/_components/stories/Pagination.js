import React, { useState, useEffect } from "react";

import "bulma";
import axios from "axios";
import Pagination from "bulma-pagination-react";
import StoryCard from "./StoryCard";
import StoriesCards from "./StoriesCards";

import { storyActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";

function Pager() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories);
  const page = stories.page;
  const size = stories.size;
  const totalPages = stories.totalPages;
  const loading = stories.loading;

  const [isPageChanged, setIsPageChanged] = useState(0);

  const content = stories.content;

  useEffect(() => {
    dispatch(storyActions.getPagedStories(page));
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

export default Pager;
