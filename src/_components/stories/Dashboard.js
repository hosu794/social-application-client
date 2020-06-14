import React, { useState, useRef, useMemo, useEffect } from "react";

import JoditEditor from "jodit-react";
import PropTypes, { func } from "prop-types";
import { storyActions } from "../../_actions";
import { useSelector, useDispatch } from "react-redux";
import { functionsIn } from "lodash";

function Dashboard() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const [error, setError] = useState({
    isTrue: false,
    message: "",
  });

  const [story, setStory] = useState({
    title: "",
    description: "",
    topic: null,
  });

  const creating = useSelector((state) => state.stories.creating);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  useEffect(() => {}, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit");
    validateContent(content);
  }

  function validateContent(value) {
    if (value.length < 20) {
      console.log("Text must have lenght bigger than 20 characters");
    } else {
      dispatch(storyActions.create(createRequest(story, content), story.topic));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setStory((story) => ({ ...story, [name]: value }));
  }

  function createRequest(story, textContent) {
    const newRequest = {
      title: story.title,
      description: story.description,
      body: textContent,
    };

    return newRequest;
  }

  function handleAlertButton() {}

  const showError = error.isTrue;
  const { description, topic, title } = story;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-size-1">Dashboard</h1>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {
            console.log(newContent);
          }}
        />
        <nav
          class="level"
          style={{
            marginTop: "1em",
          }}
        >
          <div class="level-item has-text-centered">
            <div>
              <div className="hero-body">
                <form
                  onSubmit={handleSubmit}
                  className="container has-text-centered"
                >
                  {showError && (
                    <div className="notification is-danger">
                      <button
                        onClick={handleAlertButton}
                        className="delete"
                      ></button>
                      {error.message}
                    </div>
                  )}
                  <div className="field">
                    <p className="control ">
                      <input
                        className="input"
                        name="email"
                        onChange={handleChange}
                        value={title}
                        type="text"
                        placeholder="Title"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control ">
                      <input
                        className="input"
                        name="description"
                        onChange={handleChange}
                        value={description}
                        type="text"
                        placeholder="Description"
                      />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control ">
                      <input
                        className="input"
                        name="description"
                        onChange={handleChange}
                        value={topic}
                        type="text"
                        placeholder="Topic"
                      />
                    </p>
                  </div>

                  <div className="field">
                    <button
                      type="submit"
                      className="button is-primary is-fullwidth is-light"
                    >
                      {creating ? "Creating" : "Create"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Dashboard;
