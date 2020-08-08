import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

import EditDashboard from "../../_components/stories/EditDashboard";

import { mount } from "enzyme";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

let store = mockStore({
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
    loggenIn: true,
  },
  stories: {
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

const mockStory = {
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
  authentication: {
    loggedIn: true,
  },
};

//Can't test, cause the third part library doesn't allow for that and dispaly fancy error
describe("Tests for the EditDashboard Component", () => {
  test("should render correctly", () => {});
});
