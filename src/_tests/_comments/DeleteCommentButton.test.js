import React from "react";

import { Provider } from "react-redux";

import { mount } from "enzyme";

import { mockStory, mockComment, store } from "../_testHelpers";
import DeleteCommentButton from "../../_components/comments/DeleteCommentButton";
import { MemoryRouter } from "react-router-dom";

const mockCallBack = jest.fn();

describe("Tests for the DeleteCommentButton Component", () => {
  let TestingComponent = () => (
    <Provider store={store}>
      <MemoryRouter>
        <DeleteCommentButton handleDeleteComment={mockCallBack} />
      </MemoryRouter>
    </Provider>
  );

  let wrapper = mount(<TestingComponent />);

  test("should component render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(DeleteCommentButton).toBeDefined();
  });

  test("should call function on button click", () => {
    wrapper.find("button").props().onClick();

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
