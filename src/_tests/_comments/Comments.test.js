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

let mockComment = {
  id: 1,
  body: "Some body",
  createdBy: {
    id: 12,
    name: "Joe Doe",
    username: "exampleusername",
    downloadAvatar: "dsdasdasdasdasdadas.png",
  },
};

describe("Test for the Comments Components", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Comments id={12} />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(Comments).toBeDefined();
  });

  test("should doesn't render Paragraph with text", () => {
    let element = wrapper.exists(".is-size-4");

    expect(element).toEqual(false);
  });

  test("should render CreateComment component", () => {
    let element = wrapper.exists(CreateComment);

    expect(element).toEqual(true);
  });

  test("should render list of comments", () => {
    let element = wrapper.exists(Comment);

    expect(element).toEqual(true);
  });
});
