import React from "react";

import Image from "../../img/pluto-delete-confirmation-1.png";

const Home = () => {
  return (
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src={Image} alt="" className="image is-500x500" />
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Join a community of writers around the world.</h1>
          <button class="button is-primary is-light is-large">Write</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
