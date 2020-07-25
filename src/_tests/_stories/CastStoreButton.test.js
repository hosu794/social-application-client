import React from "react";

import configureStore from "redux-mock-store";

import { Provider } from "react-redux";

import { mount } from "enzyme";
import CastStoreButton from "../../_components/stories/CastStoreButton";
import { expectation } from "sinon";

let mockStore = configureStore([]);

let store = mockStore({});

const mockCallBack = jest.fn();

describe("Test for the CastStoreButton Component ", () => {
  let TestingComponent = () => (
    <Provider store={store}>
      <CastStoreButton castStore={mockCallBack} />
    </Provider>
  );

  let wrapper = mount(<TestingComponent />);

  test("should component render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(CastStoreButton).toBeDefined();
  });

  test("should call function on button click", () => {
    wrapper.find("button").props().onClick();

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
