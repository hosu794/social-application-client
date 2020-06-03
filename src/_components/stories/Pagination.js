import React, { useState, useEffect } from "react";

import "bulma";
import axios from "axios";
import Pagination from "bulma-pagination-react";
import StoryCard from "./StoryCard";

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
          {loading ? "Loading" : <ContentMap />}
          <Pagination
            pages={totalPages}
            currentPage={page + 1}
            onChange={(page) => {
              console.log(`?page=${page}`);
              console.log(content);
              setIsPageChanged(page);
              dispatch(storyActions.changePage(page - 1));
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ContentMap() {
  const content = useSelector((state) => state.stories.content);

  if (content) {
    return content.map((story) => {
      return (
        <StoryCard
          username={story.createdBy.username}
          title={story.title}
          description={story.description}
          body={story.body}
        />
      );
    });
  } else {
    return "Loading";
  }
}

export default Pager;
