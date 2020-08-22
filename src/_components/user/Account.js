import React, { useEffect } from "react";

import Image from "../../img/account.png";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../../_actions";
import { IUser, IStats } from "../../_types";
import { Link } from "react-router-dom";
import Checkout from "../payment/Checkout";

function Account() {
  const dispatch = useDispatch();
  const loadedUser = useSelector((state) => state.user.loadedUser);
  const user = useSelector((state) => state.user.user);
  const currentUserIdentification = loadedUser ? user.id : null;
  const loadedStats = useSelector((state) => state.user.loadedStats);
  const stats = useSelector((state) => state.user.stats);
  const lovesOnCreatedStories = loadedStats
    ? stats.lovesOnCreatedStories
    : null;
  const storiesLiked = loadedStats ? stats.storiesLiked : null;
  const storiesCreated = loadedStats ? stats.storiesCreated : null;

  const url = loadedUser ? user.avatarDownloadUri : null;
  const premium = loadedUser ? user.premium : null;
  const username = loadedUser ? user.username : "loading";
  const name = loadedUser ? user.name : "loading";

  useEffect(() => {
    dispatch(userActions.getUserStats(currentUserIdentification));
  }, [loadedUser]);

  return (
    <section className="hero is-success is-fullheight">
      <h1 className="title">Account Settings</h1>
      <div className="hero-body">
        <div className="container has-text-centered">
          <img
            src={
              url
                ? url
                : "https://image.freepik.com/free-vector/404-error-page-found_41910-364.jpg"
            }
            alt=""
            className="image is-500x500"
            style={{}}
          />
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Name</p>
                  <p class="title">{name}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Username</p>
                  <p class="title">{username}</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Stories created</p>
                <p class="title">{loadedStats ? storiesCreated : "Loading"}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Stories liked</p>
                <p class="title">{loadedStats ? storiesLiked : "Loading"}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Type of account</p>
                <p class="title is-size-5">{premium ? "default" : "normal"}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes on your stories</p>
                <p class="title">
                  {loadedStats ? lovesOnCreatedStories : "Loading"}
                </p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <Link
                  to="/account/stories"
                  className="button is-primary is-light is-medium"
                >
                  My stories
                </Link>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <Link
                  to="/account/changecredentials"
                  className="button is-primary is-light is-medium"
                >
                  Change crudentials
                </Link>
              </div>
            </div>
            {!premium ? <Checkout /> : null}
          </nav>
        </div>
      </div>
    </section>
  );
}

Account.propTypes = {
  loadedUser: PropTypes.bool.isRequired,
  user: PropTypes.instanceOf(IUser).isRequired,
  loadedStats: PropTypes.bool.isRequired,
  userActions: PropTypes.object.isRequired,
  stats: PropTypes.instanceOf(IStats),
};

export default Account;
