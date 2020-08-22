import React from "react";

import configureMock from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../../_components/auth/Login";
import { mount } from "enzyme";
import { expectation } from "sinon";
import Account from "../../_components/user/Account";
import { wrap } from "lodash";

const mockStore = configureMock([]);

let store = mockStore({
  authentication: {
    loading: false,
  },
  user: {
    loadedUser: true,
    loading: false,
    user: {
      id: 1,
      name: "someName",
      username: "randomusername",
      avatarDownloadUri:
        "dsjadaskjd spa]dj askdj asd jasjdk sa]pjd spa]d ap]j.png",
    },
    loadedStats: true,
    stats: {
      storiesLiked: "12",
      storiesCreated: "23",
      lovesOnCreatedStories: "23",
    },
  },
});

describe("Test for the Account Component", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Account />
      </Provider>
    </MemoryRouter>
  );

  store.dispatch = jest.fn();

  const wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(Account).toBeDefined();
  });

  test("should render image correctly", () => {
    let element = wrapper.find("img").prop("src");
    expect(element).toEqual(
      "dsjadaskjd spa]dj askdj asd jasjdk sa]pjd spa]d ap]j.png"
    );
  });

  test("should render name correctly", () => {
    expect(wrapper.find("p").at(1).text()).toEqual("someName");
  });

  test("should render username correctly", () => {
    expect(wrapper.find("p").at(3).text()).toEqual("randomusername");
  });

  test("should render storiesCreated correctly", () => {
    expect(wrapper.find("p").at(5).text()).toBe("23");
  });

  test("should render storiesLiked correctly", () => {
    expect(wrapper.find("p").at(7).text()).toBe("12");
  });

  test("should render lovesOnCreatedStories correctly", () => {
    expect(wrapper.find("p").at(11).text()).toBe("23");
  });
});
