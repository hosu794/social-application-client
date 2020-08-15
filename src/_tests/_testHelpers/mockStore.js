import React from "react";

import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Comment from "../../_components/comments/Comment";
import { mount } from "enzyme";

import { Provider } from "react-redux";
import Comments from "../../_components/comments/Comments";
import CreateComment from "../../_components/comments/CreateComment";

const mockStore = configureStore([]);

export let store = mockStore({
  alert: {
    type: "alert-success",
  },
  comment: {
    loaded: true,
    currentComment: {
      id: 1,
      body: "Some body",
      createdBy: {
        id: 12,
        name: "Joe Doe",
        username: "exampleusername",
        downloadAvatar: "dsdasdasdasdasdadas.png",
      },
    },
    content: [
      {
        id: 1,
        body: "Some body",
        createdBy: {
          id: 12,
          name: "Joe Doe",
          username: "exampleusername",
          downloadAvatar: "dsdasdasdasdasdadas.png",
        },
      },
    ],
  },
  user: {
    isUverLovedStory: true,
    user: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
  authentication: {
    loggedIn: true,
  },
  stories: {
    content: [],
    currentStory: {
      id: 1,
      title: "Story Title",
      description: "Story description",
      totalLoves: 12,
      body: "<p>Simple Story</p>",
      createdBy: {
        id: 12,
        name: "Joe Doe",
        username: "exampleusername",
        downloadAvatar: "dsdasdasdasdasdadas.png",
      },
      topic: {
        id: 12,
        title: "Topic Example Title",
        description: "Description Example description",
        createdAt: "Dummy date",
        createdBy: {
          id: 12,
          name: "Joe Doe",
          username: "exampleusername",
          downloadAvatar: "dsdasdasdasdasdadas.png",
        },
      },
    },
  },
});
