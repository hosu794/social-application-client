import React from "react";

import configureStore from "redux-mock-store";

import { Provider } from "react-redux";

import DeleteStoreButton from "../../_components/stories/DeleteStoryButton";

import { mount } from "enzyme";

let mockStore = configureStore([]);

let store = mockStore({});

const mockCallBack = jest.fn();

describe("Test for the DeleteStoryButton Component", () => {
  let TestingComponent = () => (
    <Provider store={store}>
      <DeleteStoreButton deleteHandler={mockCallBack} />
    </Provider>
  );

  let wrapper = mount(<TestingComponent />);

  test("should component render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(DeleteStoreButton).toBeDefined();
  });

  test("should call function on button click", () => {
    wrapper.find("button").props().onClick();

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
