import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ChangePassword from "../../_components/user/ChangePassword";
import { mount } from "enzyme";

let mockStore = configureStore([]);

let store = mockStore({
  authentication: {
    loading: false,
    error: true,
  },
});

describe("Test for the ChangePassword Component", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <ChangePassword />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("should update a password input when it is changed ", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "password",
          value: "newpassword",
        },
      });

    let element = wrapper.find(ChangePassword).find("input").at(0).props()
      .value;

    expect(element).toEqual("newpassword");
  });

  test("should update a reapetPassword input when it is changed", () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "repeatPassword",
          value: "newpassword",
        },
      });

    let element = wrapper.find(ChangePassword).find("input").at(1).props()
      .value;

    expect(element).toEqual("newpassword");
  });
});
