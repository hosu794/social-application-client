import React from "react";

import { Provider } from "react-redux";

import { mount } from "enzyme";

import {
  mockStory,
  mockComment,
  store,
  mockIdMatchParams,
} from "../_testHelpers";
import DeleteCommentButton from "../../_components/comments/DeleteCommentButton";
import { MemoryRouter } from "react-router-dom";
import EditCommentDashboard from "../../_components/comments/EditCommentDashboard";

describe("Tests for the EditCommentDashboard Component", () => {
  let TestingComponent = () => (
    <Provider store={store}>
      <MemoryRouter>
        <EditCommentDashboard match={mockIdMatchParams} />
      </MemoryRouter>
    </Provider>
  );

  store.dispatch = jest.fn();

  let wrapper = mount(<TestingComponent />);

  test("should render componenent correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(EditCommentDashboard).toBeDefined();
  });

  test("should display Notification about successfully updated comment", () => {
    console.log(wrapper.debug());

    let element;

    const expectedText = "Comment Updated Successfully";

    element = wrapper.find(".notification").text();

    expect(element).toEqual(expectedText);
  });

  test("should update an password input when it is changed", async () => {
    let expectedValue = "Some fancy comment";

    await wrapper
      .find("input")
      .first()
      .simulate("change", {
        persist: () => {},
        target: {
          name: "body",
          value: expectedValue,
        },
      });

    let newValue = wrapper
      .find(EditCommentDashboard)
      .find("input")
      .first()
      .props().value;

    expect(newValue).toEqual(expectedValue);

    await wrapper.find(".button").simulate("click");

    expect(store.dispatch.mock.calls.length).toEqual(2);
  });
});
