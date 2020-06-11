import React, { useEffect } from "react";

import { storyActions, userActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";

function Story(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.stories.loading);
  const story = useSelector((state) => state.stories.currentStory);
  const loadedUser = useSelector((state) => state.user.loadedUser);
  const user = useSelector((state) => state.user.user);
  const loaded = !isLoading && loadedUser && story;

  useEffect(() => {
    dispatch(storyActions.getStoryById(props.match.params.id));
  }, []);

  return (
    <section class="section">
      {loaded ? (
        <LoadedStory
          title={story.title}
          description={story.description}
          key={story.id}
          creator={story.createdBy}
          loves={story.totalLoves}
          topic={story.topic}
          body={story.body}
          id={story.id}
          user={user}
        />
      ) : (
        "Loading..."
      )}
    </section>
  );
}

function LoadedStory(props) {
  const dispatch = useDispatch();

  const isUserLovedStory = useSelector((state) => state.user.isUserLovedStory);

  useEffect(() => {
    dispatch(
      userActions.checkLoveAvailability({
        storyId: props.id,
        userId: props.user.id,
      })
    );
  }, [props.loves]);

  function castStore(e) {
    e.preventDefault();
    dispatch(storyActions.castLove({ storyId: props.id }));
  }

  function unCastStore(e) {
    e.preventDefault();
    dispatch(storyActions.unCastLove({ storyId: props.id }));
  }

  return (
    <section class="section">
      <div class="container">
        <h1 className="title">{props.title}</h1>
        <h2 class="subtitle">{props.description}</h2>
        <p>{props.body}</p>
        <nav
          class="level"
          style={{
            marginTop: "1em",
          }}
        >
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Author</p>
              <p class="title">{props.creator.username}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Topic</p>
              <p class="title">{props.topic.title}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Loves</p>
              <p class="title">{props.loves}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              {isUserLovedStory ? (
                <button onClick={castStore} className="button is-white">
                  Like
                </button>
              ) : (
                <button onClick={unCastStore} className="button is-white">
                  Unlike
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Story;
