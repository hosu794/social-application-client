import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Register from "../../_components/auth/Register";
import { mount } from "enzyme";
import { wrap } from "lodash";
const mockStore = configureStore([]);

let store = mockStore({
  authentication: {
    loading: false,
    error: false,
  },
  user: {
    isUsernameAvailable: true,
    isEmailAvailable: true,
  },
  registration: {
    registering: false,
  },
});

describe("Test for the Register Component", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Register />
      </Provider>
    </MemoryRouter>
  );

  const wrapper = mount(<TestingComponent />);

  test("should render component correct", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(Register).toBeDefined();
  });

  test("should update username input when it changed", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "username",
          value: "exampleusername",
        },
      });

    let element = wrapper.find(Register).find("input").at(0).props().value;

    expect(element).toEqual("exampleusername");
  });

  test("should update name input when it changed", () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "name",
          value: "Random Name",
        },
      });

    let element = wrapper.find(Register).find("input").at(1).props().value;

    expect(element).toEqual("Random Name");
  });

  test("should update email input when it changed", () => {
    wrapper
      .find("input")
      .at(2)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "email",
          value: "joedoe@example.com",
        },
      });

    let element = wrapper.find(Register).find("input").at(2).props().value;

    expect(element).toEqual("joedoe@example.com");
  });

  test("should update password input when it changed", () => {
    wrapper
      .find("input")
      .at(3)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "password",
          value: "randompassword",
        },
      });

    let element = wrapper.find(Register).find("input").at(3).props().value;

    expect(element).toEqual("randompassword");
  });

  test("should update confirmPassword input when it changed", () => {
    wrapper
      .find("input")
      .at(4)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "confirmPassword",
          value: "randomconfirmpassword",
        },
      });

    let element = wrapper.find(Register).find("input").at(4).props().value;

    expect(element).toEqual("randomconfirmpassword");
  });
});
