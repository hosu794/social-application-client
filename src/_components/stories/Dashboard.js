import React, { useState, useRef, useEffect } from "react";

import JoditEditor from "jodit-react";

import { storyActions, topicActions } from "../../_actions";
import { useSelector, useDispatch } from "react-redux";
import { functionsIn } from "lodash";

function Dashboard() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.content);
  const loading = useDispatch((state) => state.topics.loading);
  const currentTopic = useSelector((state) => state.topics.currentTopic);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [fields, setFields] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const [errors, setErrors] = useState({
    bodyError: "",
    titleError: "",
    descriptionError: "",
    topicError: "",
  });

  const { description, topic, title } = fields;

  function validate() {
    let bodyError = "";
    let titleErors = " ";
    let topicErors = "";

    if (!fields.title) {
      titleErors = "Title Required";
    }

    if (titleErors) {
      setErrors((error) => ({ ...error, titleErors }));
      return false;
    }

    return true;
  }
  const creating = useSelector((state) => state.stories.creating);

  const config = {
    readonly: false,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(fields);
    }
  }

  useEffect(() => {}, [errors]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((field) => ({ ...field, [name]: value }));
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

    if (topic) {
      dispatch(topicActions.getTopicByTitle(topic));
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-size-1">Dashboard</h1>
        <div>
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
          {errors.bodyError ? (
            <p class="help is-danger">{errors.bodyError}</p>
          ) : null}
        </div>

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
                  {errors.bodyError ? (
                    <p class="help is-danger">{errors.bodyError}</p>
                  ) : null}
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
                  {errors.bodyError ? (
                    <p class="help is-danger">{errors.bodyError}</p>
                  ) : null}
                </div>

                <div class="field">
                  <label
                    class="label has-text-light	is-size-4	"
                    for="selectbasic-0"
                  >
                    {!loading ? "Loading" : "Select Topic"}
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
                        {!loading
                          ? ""
                          : topics.map((topic) => (
                              <option>{topic.title}</option>
                            ))}
                      </select>
                    </div>
                  </div>
                  {errors.bodyError ? (
                    <p class="help is-danger">{errors.bodyError}</p>
                  ) : null}
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
