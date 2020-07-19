import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../../_components/auth/Login";
import { mount } from "enzyme";
import LogoutButton from "../../_components/auth/LogoutButton";

const mockStore = configureStore([]);

let store = mockStore({
  authentication: {
    loading: false,
    error: true,
  },
});

describe("Test for the Login Component", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </MemoryRouter>
  );

  store.dispatch = jest.fn();

  const wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should be definded", () => {
    expect(Login).toBeDefined();
  });

  test("should update an first input when it is changed", () => {
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

    let newValue = wrapper.find(Login).find("input").at(0).props().value;

    expect(newValue).toEqual("exampleusername");
  });

  test("should update an second input when it is changed", () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        persist: () => {},
        target: {
          name: "password",
          value: "randompassword",
        },
      });

    let newValue = wrapper.find(Login).find("input").at(1).props().value;
    expect(newValue).toEqual("randompassword");
  });
});
