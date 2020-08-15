import React from "react";

import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Comment from "../../_components/comments/Comment";
import { mount } from "enzyme";

import { Provider } from "react-redux";
import Comments from "../../_components/comments/Comments";
import CreateComment from "../../_components/comments/CreateComment";

import { mockComment, store } from "../_testHelpers";

describe("Test for the CreateComment Component", () => {
  let TestingComponent = () => (
    <Provider store={store}>
      <MemoryRouter>
        <CreateComment id={12} />
      </MemoryRouter>
    </Provider>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(CreateComment).toBeDefined();
  });

  test("should update an body input it is changed", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "body",
          value: "Some fancy text",
        },
      });

    let newValue = wrapper.find(CreateComment).find("input").at(0).props()
      .value;

    expect(newValue).toEqual("Some fancy text");
  });

  test("should show error message, when field is empty", () => {
    wrapper.find(".button").simulate("click");

    let element = wrapper.find(".is-danger").at(0).text();

    expect(element).toBeDefined();
  });
});
