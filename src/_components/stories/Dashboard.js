import React, { useState, useRef, useEffect } from "react";

import JoditEditor from "jodit-react";

import { storyActions, topicActions } from "../../_actions";
import { useSelector, useDispatch } from "react-redux";
import { functionsIn, setWith } from "lodash";
import PropTypes from "prop-types";
import { ITopic } from "../../_types";

function Dashboard() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.content);
  const loading = useDispatch((state) => state.topics.loading);
  const currentTopic = useSelector((state) => state.topics.currentTopic);
  const creating = useSelector((state) => state.stories.creating);

  const editor = useRef(null);

  const [content, setContent] = useState("");
  const [fields, setFields] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const [errors, setErrors] = useState({});

  const config = {
    readonly: false,
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((field) => ({ ...field, [name]: value }));
  }

  function createRequest(story, textContent, topic) {
    const newRequest = {
      title: story.title,
      description: story.description,
      body: textContent,
      topic,
    };

    return newRequest;
  }

  function onSubmit(e) {
    e.preventDefault();

    const isValid = validate();

    const isValidAndCurrentTopicIdExist =
      isValid && currentTopic.title == topic;

    if (isValidAndCurrentTopicIdExist) {
      dispatch(
        storyActions.create(createRequest(fields, content, currentTopic.id))
      );
    }
  }

  const { title, description, topic } = fields;

  function validate() {
    setErrors({});

    let contentError = "";
    let descriptionError = "";
    let titleErrors = "";
    let topicErrors = "";
    let isValid = true;

    if (!title) {
      titleErrors = "Title Required";
    }

    if (title.length <= 5) {
      titleErrors = "Title must have at least 5 characters";
    }

    if (titleErrors) {
      setErrors((error) => ({ ...error, titleErrors }));
      isValid = false;
    }

    if (!content) {
      contentError = "Content required";
    }

    if (contentError) {
      setErrors((error) => ({ ...error, contentError }));
      isValid = false;
    }

    if (!description) {
      descriptionError = "Description required";
    }

    if (descriptionError) {
      setErrors((error) => ({ ...error, descriptionError }));
      isValid = false;
    }

    if (!topic) {
      topicErrors = "Topic required";
    }

    if (topicErrors) {
      setErrors((error) => ({
        ...error,
        topicErrors,
      }));
    }

    if (isValid) {
      return true;
    } else return false;
  }

  useEffect(() => {
    dispatch(topicActions.getAllTopics());
    if (topic) {
      dispatch(topicActions.getTopicByTitle(topic));
    }
  }, [topic]);

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
          {errors.contentError ? (
            <p class="help is-danger">{errors.contentError}</p>
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
                  {errors.titleErrors ? (
                    <p class="help is-danger">{errors.titleErrors}</p>
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
                  {errors.descriptionError ? (
                    <p class="help is-danger">{errors.descriptionError}</p>
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
                        <option></option>
                        {!loading
                          ? ""
                          : topics.map((topic) => (
                              <option>{topic.title}</option>
                            ))}
                      </select>
                    </div>
                  </div>
                  {errors.topicErrors ? (
                    <p class="help is-danger">{errors.topicErrors}</p>
                  ) : null}
                </div>

                <div class="field">
                  <div class="control">
                    <button
                      id="singlebutton-0"
                      name="singlebutton-0"
                      class="button "
                    >
                      {creating ? "Creating" : "Create"}
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

Dashboard.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.instanceOf(ITopic)),
  loading: PropTypes.string,
  currentTopic: PropTypes.instanceOf(ITopic),
  creating: PropTypes.string,
};

export default Dashboard;
