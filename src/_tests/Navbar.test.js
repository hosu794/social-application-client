import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "../_components/layout/Navbar";
import { mount } from "enzyme";
import { wrap } from "lodash";
import LoggedButton from "../_components/layout/LoggedButton";

describe("Test navbar component", () => {
  let mockStore = configureStore([]);
  let store = mockStore({
    authentication: {
      loggedIn: true,
    },
    user: {},
  });

  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </MemoryRouter>
  );

  const wrapper = mount(<TestingComponent />);
  console.log(wrapper.debug());

  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined", () => {
    expect(Navbar).toBeDefined();
  });

  test("should buttons div contains LoggedButton", () => {
    expect(wrapper.contains(<LoggedButton />)).toEqual(true);
  });

  test("should navbarBasisExample has is-active class", () => {
    wrapper.find("a").at(1).simulate("click");
    expect(wrapper.find("#navbarBasicExample").hasClass("is-active")).toEqual(
      true
    );
    expect(wrapper.find(".navbar-burger").hasClass("is-active")).toEqual(true);
  });
});
