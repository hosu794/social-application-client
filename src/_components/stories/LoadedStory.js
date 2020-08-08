import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { storyActions, userActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IStory } from "../../_types";

import CastStoreButton from "./CastStoreButton";

import UnCastStoreButton from "./UnCastStoreButton";

import DeleteStoryButton from "./DeleteStoryButton";
import { Link } from "react-router-dom";

function LoadedStory(props) {
  const dispatch = useDispatch();

  const editStoryUrl = `/stories/edit/${props.id}`;

  const isUserLovedStory = useSelector((state) => state.user.isUserLovedStory);
  const isLogged = useSelector((state) => state.authentication.loggedIn);
  const user = useSelector((state) => state.user.user);
  const isUserExist = user ? user.id : null;
  const isUserIdentificationIsEqualStoryCreator = isUserExist === props.userId;
  const currentStory = useSelector((state) => state.stories.currentStory);

  function deleteHandler() {
    dispatch(storyActions.deleteStory(props.id));
  }

  const unCastStore = async () => {
    await dispatch(storyActions.unCastLove({ storyId: props.id }));
  };

  const castStore = async () => {
    await dispatch(storyActions.castLove({ storyId: props.id }));
  };

  const checkLoveAvailabilityIfIsLogged = async () => {
    if (isLogged) {
      await dispatch(
        userActions.checkLoveAvailability({
          storyId: currentStory.id,
          userId: isUserExist,
        })
      );
    }
  };

  useEffect(() => {
    checkLoveAvailabilityIfIsLogged();
  }, [props.loves]);

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
                  <CastStoreButton id={props.id} castStore={castStore} />
                ) : (
                  <UnCastStoreButton id={props.id} unCastStore={unCastStore} />
                )}
              </div>
            ) : null}
          </div>
          {isUserIdentificationIsEqualStoryCreator ? (
            <div class="level-item has-text-centered">
              <div>
                <DeleteStoryButton deleteHandler={deleteHandler} />
              </div>
            </div>
          ) : null}
          {isUserIdentificationIsEqualStoryCreator ? (
            <div class="level-item has-text-centered">
              <div>
                <Link to={editStoryUrl}>
                  <button className="button is-info">Edit</button>
                </Link>
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

export default LoadedStory;
