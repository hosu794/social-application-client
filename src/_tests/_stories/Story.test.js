import React from "react";

import configureMock from "redux-mock-store";
import { create } from "lodash";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Story from "../../_components/stories/Story";
import { mount } from "enzyme";
import LoadedStory from "../../_components/stories/LoadedStory";
import { stories } from "../../_reducers/story.reducer";

let mockStore = configureMock([]);

let store = mockStore({
  comment: {
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
  authentication: {
    loggedIn: true,
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
    content: [
      {
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
    ],
    size: 12,
    totalPages: 2,
    loading: false,
    error: false,
    casting: false,
    currentPage: 0,
    isLoading: false,
  },

  user: {
    user: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
    loadedUser: true,
    isLoading: false,
  },
});

let mockMatch = {
  params: {
    id: 12,
  },
};

describe("Test for the Story Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Story match={mockMatch} />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should component render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(Story).toBeDefined();
  });

  test("should LoadedStory exists", () => {
    let element = wrapper.find(".section").first().text();

    const expected = "Loading...";

    expect(element).toEqual(expect.not.stringContaining(expected));
  });
});
