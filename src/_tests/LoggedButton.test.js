import { shallow, mount, configure, render } from "enzyme";

import React from "react";

import LogoutButton from "../_components/auth/LogoutButton";

import configureStore from "redux-mock-store";

import { Provider } from "react-redux";

import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore({
  user: {
    user: {
      id: 1,
      username: "username",
      name: "Joe Doe",
      avatarDownloadUri: "https://bulma.io/images/placeholders/128x128.png",
    },
  },
});

describe("Test click simulation on LoggedButton", () => {
  const mockCallBack = jest.fn();

  const TestingComponent = () => (
    <MemoryRouter>
      {" "}
      <Provider store={store}>
        <a onClick={mockCallBack} className="button is-light">
          Log out
        </a>
      </Provider>
    </MemoryRouter>
  );

  const wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined", () => {
    expect(LogoutButton).toBeDefined();
  });

  test("should dispatch an action on button click", () => {
    wrapper.find("a").simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
  });
});

describe("Test dispatch interaction with a button", () => {
  store.dispatch = jest.fn();

  const TestingComponent = () => (
    <MemoryRouter>
      {" "}
      <Provider store={store}>
        <LogoutButton />
      </Provider>
    </MemoryRouter>
  );

  const wrapper = mount(<TestingComponent />);

  test("should dispatch an action on button click", () => {
    wrapper.find("a").simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
