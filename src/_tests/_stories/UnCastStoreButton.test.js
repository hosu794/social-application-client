import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import UnCastStoreButton from "../../_components/stories/UnCastStoreButton";

import sinon from "sinon";

import { mount } from "enzyme";

let mockStore = configureStore([]);

let store = mockStore({});

describe("Test for the UnCastStoreButton Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <UnCastStoreButton />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should component render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(UnCastStoreButton).toBeDefined();
  });
});
