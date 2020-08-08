import React from "react";

import configureStore from "redux-mock-store";

import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import EditStory from "../../_components/stories/EditStory";

const mockStore = configureStore([]);

let store = mockStore({
  stories: {
    loading: false,
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

const story = {
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

let mockMatch = {
  params: {
    id: 12,
  },
};

describe("Test for the EditStore Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <EditStory match={mockMatch} />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(EditStory).toBeDefined();
  });
});
