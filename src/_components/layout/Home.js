import React from "react";

import Image from "../../img/pluto-delete-confirmation-1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={Image} alt="" className="image is-500x500" />
        </div>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Join a community of writers around the world.
          </h1>
          <Link to="/dashboard">
            {" "}
            <button className="button is-primary is-light is-large">
              Write
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
