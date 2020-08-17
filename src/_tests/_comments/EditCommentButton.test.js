import React from "react";

import { Provider } from "react-redux";

import { mount } from "enzyme";

import { Link } from "react-router-dom";

import { mockStory, mockComment, store } from "../_testHelpers";
import DeleteCommentButton from "../../_components/comments/DeleteCommentButton";
import { MemoryRouter } from "react-router-dom";
import EditCommentButton from "../../_components/comments/EditCommentButton";

describe("Tests for the EditCommentButton Component", () => {
  let TestingComponent = () => (
    <Provider store={store}>
      <MemoryRouter>
        <EditCommentButton id={12} />
      </MemoryRouter>
    </Provider>
  );

  let wrapper = mount(<TestingComponent />);

  test("should component render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(EditCommentButton).toBeDefined();
  });

  test("should Link Component have correct props", () => {
    let expectedText = "/comment/edit/12";

    let element = wrapper.find(Link).prop("to");

    expect(element).toEqual(expectedText);
  });

  test("should button have correct text value", () => {
    let expectedText = "Edit";

    let element = wrapper.find("button").text();

    expect(element).toEqual(expectedText);
  });
});
