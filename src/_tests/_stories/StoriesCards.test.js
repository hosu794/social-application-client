import React from "react";

import configureMock from "redux-mock-store";

import { Provider } from "react-redux";

import { MemoryRouter } from "react-router-dom";
import Pager from "../../_components/stories/Pagination";
import { mount } from "enzyme";
import StoryCard from "../../_components/stories/StoryCard";

const mockStore = configureMock([]);

let store = mockStore({
  user: {
    id: 12,
    name: "Joe Doe",
    username: "exampleusername",
    downloadAvatar: "dsdasdasdasdasdadas.png",
    premium: true,
  },
  stories: {
    content: [
      {
        premiumContent: true,
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
  creationDateTime: "Dummy date",
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
};

describe("Test for the Stories Cards", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <StoryCard
          key={story.id}
          id={story.id}
          username={story.createdBy.username}
          title={story.title}
          userId={story.createdBy.id}
          description={story.description}
          body={story.body}
          data={story.creationDateTime}
        />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  store.describe = jest.fn();

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(wrapper).toBeDefined();
  });
});
