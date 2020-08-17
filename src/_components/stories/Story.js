import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { storyActions, userActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IStory } from "../../_types";

import LoadedStory from "./LoadedStory";

function Story(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.stories.loading);
  const story = useSelector((state) => state.stories.currentStory);
  const loadedUser = useSelector((state) => state.user.loadedUser);
  const user = useSelector((state) => state.user.user);
  const loaded = !isLoading && loadedUser && story;

  const getStoryById = async (id) => {
    await dispatch(storyActions.getStoryById(id));
  };

  useEffect(() => {
    getStoryById(props.match.params.id);
  }, []);

  return (
    <section className="section">
      {!isLoading ? (
        <LoadedStory
          title={story.title}
          description={story.description}
          key={story.id}
          creator={story.createdBy}
          loves={story.totalLoves}
          topic={story.topic}
          body={story.body}
          id={props.match.params.id}
          user={user}
          userId={story.createdBy.id}
        />
      ) : (
        "Loading..."
      )}
    </section>
  );
}

Story.propTypes = {
  isLoading: PropTypes.bool,
  story: PropTypes.instanceOf(IStory),
  LoadedUser: PropTypes.bool,
  user: PropTypes.instanceOf(IUser),
};

export default Story;
