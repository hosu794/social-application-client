import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ChangeUsername from "../../_components/user/ChangeUsername";
import { expectation } from "sinon";

import { mount } from "enzyme";

const mockStore = configureStore([]);

let store = mockStore({
  authentication: {
    loading: false,
  },
  user: {
    isAvailable: false,
  },
});

describe("Test for the ChangeUsername Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <ChangeUsername />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component to be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("should change a username input when it is changed", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "username",
          value: "newusername",
        },
      });

    let element = wrapper.find(ChangeUsername).find("input").at(0).props()
      .value;
  });

  test("should change a lastname input when it is changed", () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "lastname",
          value: "newusername",
        },
      });

    let element = wrapper.find(ChangeUsername).find("input").at(1).props()
      .value;
  });
});
