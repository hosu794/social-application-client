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
          id={story.id}
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

function LoadedStory(props) {
  const dispatch = useDispatch();

  const isUserLovedStory = useSelector((state) => state.user.isUserLovedStory);
  const isLogged = useSelector((state) => state.authentication.loggedIn);
  const user = useSelector((state) => state.user.user);
  const isUserExist = user ? user.id : null;
  const isUserIdentificationIsEqualStoryCreator = isUserExist === props.userId;
  const currentStory = useSelector((state) => state.stories.currentStory);

  function deleteHandler() {
    dispatch(storyActions.deleteStory(props.id));
  }

  useEffect(() => {
    if (isLogged) {
      dispatch(
        userActions.checkLoveAvailability({
          storyId: currentStory.id,
          userId: isUserExist,
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
    <section className="section">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.description}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
        <nav
          className="level"
          style={{
            marginTop: "1em",
          }}
        >
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Author</p>
              <p className="title">{props.creator.username}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Topic</p>
              <p className="title">{props.topic.title}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Loves</p>
              <p className="title">{props.loves}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
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
          {isUserIdentificationIsEqualStoryCreator ? (
            <div class="level-item has-text-centered">
              <div>
                <button
                  onClick={deleteHandler}
                  className="button is-danger
        "
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </section>
  );
}

LoadedStory.propTypes = {
  isUserLovedStory: PropTypes.bool,
  user: PropTypes.instanceOf(IUser),
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
