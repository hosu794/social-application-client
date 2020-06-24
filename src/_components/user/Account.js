import React from "react";

import Image from "../../img/account.png";

function Account() {
  return (
    <section className="hero is-success is-fullheight">
      <h1 className="title">Account Settings</h1>
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={Image} alt="" className="image is-500x500" />
        </div>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Stories created</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Stories liked</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes on your stories</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <button className="button is-primary is-light is-medium">
                  My stories
                </button>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <button className="button is-primary is-light is-medium">
                  Change crudentials
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Account;
