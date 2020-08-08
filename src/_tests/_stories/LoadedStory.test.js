import React from "react";

import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import LoadedStory from "../../_components/stories/LoadedStory";
import { mount } from "enzyme";

import { Provider } from "react-redux";

import DeleteStoryButton from "../../_components/stories/DeleteStoryButton";

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

describe("Test for the LodaedStory Component ", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <LoadedStory
          title={story.title}
          description={story.description}
          key={story.id}
          creator={story.createdBy}
          loves={story.totalLoves}
          topic={story.topic}
          body={story.body}
          id={story.id}
          user={story.createdBy}
          userId={story.createdBy.id}
        />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(LoadedStory).toBeDefined();
  });

  test("should render correctly story title", () => {
    let element = wrapper.find(".title").first().text();
    expect(element).toEqual(story.title);
  });

  test("should render correctly story description", () => {
    let element = wrapper.find(".subtitle").first().text();
    expect(element).toEqual(story.description);
  });

  test("should render correctly body ", () => {
    let element = wrapper.find("p").first().text();

    expect(element).toEqual("Simple Story");
  });

  test("should render correctly author ", () => {
    let element = wrapper.find(".title").at(1).text();

    expect(element).toEqual(story.createdBy.username);
  });

  test("should render correctly topic title", () => {
    let element = wrapper.find(".title").at(2).text();

    expect(element).toEqual(story.topic.title);
  });

  test("should render correctly count of loves", () => {
    let element = wrapper.find(".title").at(3).text();

    expect(element).toEqual("12");
  });

  test("should return DeleteButton Component", () => {
    let isExist = wrapper.exists(DeleteStoryButton);

    expect(isExist).toEqual(true);
  });
});
