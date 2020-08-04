import React from "react";

import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import FileUpload from "../../_components/user/FileUpload";
import { mount } from "enzyme";
import { expectation } from "sinon";
import { fileActions } from "../../_actions";
import { Form } from "formik";

const mockStore = configureStore([]);

let store = mockStore({});

describe("Test for the FileUplaod Component", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <FileUpload />
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
});
