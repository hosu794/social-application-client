import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

import Dashboard from "../../_components/stories/Dashboard";
import { mount, shallow } from "enzyme";
import { expectation } from "sinon";

let store = mockStore({
  authentication: {},
  topics: {
    content: [
      {
        id: 1,
        title: "Random Title",
        description: "Random Description",
        createdAt: "Dummy date",
        createdBy: {
          id: 1,
          username: "Username ",
          name: "Joe Doe",
          avatarDownloadUri: "dsadadsa0 0dsa-d0 asd- -a0s.png",
        },
      },
    ],
  },
});

describe("Test fot the Dashboard Component", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = shallow(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(wrapper).toBeDefined();
  });
});
