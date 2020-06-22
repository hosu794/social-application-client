import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { storyActions, userActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IStory } from "../../_types";

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
      {!isLoading ? (
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

Story.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  story: PropTypes.instanceOf(IStory),
  LoadedUser: PropTypes.bool.isRequired,
  user: PropTypes.instanceOf(IUser),
};

function LoadedStory(props) {
  const dispatch = useDispatch();

  const isUserLovedStory = useSelector((state) => state.user.isUserLovedStory);
  const isLogged = useSelector((state) => state.authentication.loggedIn);

  useEffect(() => {
    if (isLogged) {
      dispatch(
        userActions.checkLoveAvailability({
          storyId: props.id,
          userId: props.user.id,
        })
      );
    }
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
        <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
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
            {isLogged ? (
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
            ) : null}
          </div>
        </nav>
      </div>
    </section>
  );
}

LoadedStory.propTypes = {
  isUserLovedStory: PropTypes.bool,
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,

    body: PropTypes.string.isRequired,
    loves: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};

export default Story;
