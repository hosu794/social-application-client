import { shallow, mount, configure, render } from "enzyme";

import React from "react";

import sinon, { expectation } from "sinon";

import LoggedButton from "../_components/layout/LoggedButton";

import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "antd";

const mockStore = configureStore([]);

describe("My connected React-Redux Component", () => {
  let store;
  let wrapper;

  beforeAll(() => {
    store = mockStore({
      user: {
        user: {
          id: 1,
          username: "username",
          name: "Joe Doe",
          avatarDownloadUri: "https://bulma.io/images/placeholders/128x128.png",
        },
      },
    });

    store.dispatch = jest.fn();

    wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <LoggedButton />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should render component correctly", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("should dispatch an action on button click", () => {});
});
