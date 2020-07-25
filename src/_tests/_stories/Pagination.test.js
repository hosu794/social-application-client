import React from "react";

import configureMock from "redux-mock-store";
import { Provider } from "react-redux";
import Pager from "../../_components/stories/Pagination";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import StoriesCards from "../../_components/stories/StoriesCards";

const mockStore = configureMock([]);

let store = mockStore({
  stories: {
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
  },
});

describe("Test for the Pagination Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Pager />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  store.dispatch = jest.fn();

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("should StoriesCards exists", () => {
    expect(wrapper.exists(StoriesCards)).toEqual(true);
  });

  test("should Pagination jhave correct props", () => {
    let element = wrapper.find(".pagination").first().prop("pages");
    expect(element).toEqual(2);
  });

  test("should Pagination Component have correct props ", () => {
    expect(
      wrapper.find(".pagination").first().props().currentPage
    ).toBeDefined();

    expect(wrapper.find(".pagination").first().props().pages).toBeDefined();
  });
});
