import React from "react";

import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Comment from "../../_components/comments/Comment";
import { mount } from "enzyme";

import { Provider } from "react-redux";

import EditCommentButton from "../../_components/comments/EditCommentButton";
import DeleteCommentButton from "../../_components/comments/DeleteCommentButton";

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
    loggenIn: true,
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

describe("Test for the Comment Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Comment comment={mockComment} />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(Comment).toBeDefined();
  });

  test("should render correctly component props", () => {
    let element;

    element = wrapper.find(".is-size-5").first().text();
    expect(element).toEqual(mockComment.body);

    element = wrapper.find(".is-size-6").first().text();

    let CREATED_BY = "created by ";

    expect(element).toEqual(CREATED_BY + mockComment.createdBy.username);
  });

  test("should component containst EditCommentButton", () => {
    let element = wrapper.exists(EditCommentButton);
    expect(element).toEqual(true);
  });

  test("should component constainst DeleteCommentButton", () => {
    let element = wrapper.exists(DeleteCommentButton);

    expect(element).toEqual(true);
  });
});
