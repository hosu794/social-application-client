import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import StoryCard from "../../_components/stories/StoryCard";
import { mount } from "enzyme";

const mockStore = configureStore([]);

let store = mockStore({
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

describe("Test for the StoryCard Component", () => {
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

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined ", () => {
    expect(StoryCard).toBeDefined();
  });

  test("should correctly render title ", () => {
    let element = wrapper.find(".title").first().text();

    expect(element).toEqual(story.title);
  });

  test("should correctly render description ", () => {
    let element = wrapper.find("span").first().text();

    expect(element).toEqual(story.description);
  });

  test("should correctly render username", () => {
    let element = wrapper.find("p").first().text();

    expect(element).toEqual("by exampleusername");
  });

  test("should Link have correct props", () => {
    let element = wrapper.find(Link).prop("to");

    expect(element).toEqual("/stories/1");
  });
});
