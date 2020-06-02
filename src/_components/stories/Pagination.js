import React, { useState, useEffect } from "react";

import "bulma";
import axios from "axios";
import Pagination from "bulma-pagination-react";
import StoryCard from "./StoryCard";

function Pager() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  function fetchStories() {
    return axios
      .get(`https://the-writers-mind.herokuapp.com/api/stories?page=${page}`)
      .then((res) => {
        console.log(res.data);
        setStories(res.data.content);
        setPage(res.data.page);
        setSize(res.data.size);
        setTotalPages(res.data.totalPages);
      });
  }

  function changePage(page) {
    setPage(page);
  }

  useEffect(() => {
    fetchStories();
  }, [page]);

  return (
    <React.Fragment>
      {stories.map((story) => {
        return (
          <StoryCard
            key={story.id}
            title={story.title}
            description={story.description}
            body={story.body}
          />
        );
      })}
      <Pagination
        pages={totalPages}
        currentPage={page + 1}
        onChange={(page) => {
          console.log(`?page=${page}`);
          changePage(page - 1);
        }}
      />
    </React.Fragment>
  );
}
export default Pager;
