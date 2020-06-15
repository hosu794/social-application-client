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
    topic: "",
  });
  const { description, topic, title } = story;

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

  function onSubmit(e) {
    e.preventDefault();
    console.log(story);
    console.log(content);
  }

  function handleAlertButton() {}

  const showError = error.isTrue;

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
        <div className="hero-body is-full-width">
          <div className="is-full-width">
            <form class="form-horizontal is-full-width" onSubmit={onSubmit}>
              <fieldset>
                <legend></legend>

                <div class="field">
                  <label class="label" for="title"></label>
                  <div class="control">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Title"
                      class="input "
                      value={title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label" for="description"></label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      placeholder="Description"
                    >
                      Description
                    </textarea>
                  </div>
                </div>

                <div class="field">
                  <label
                    class="label has-text-light	is-size-4	"
                    for="selectbasic-0"
                  >
                    Select Topic
                  </label>
                  <div class="control">
                    <div class="select">
                      <select
                        id="topic"
                        name="topic"
                        value={topic}
                        onChange={handleChange}
                        class=""
                      >
                        <option>Option one</option>
                        <option>Option two</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button
                      id="singlebutton-0"
                      name="singlebutton-0"
                      class="button "
                    >
                      Create
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
