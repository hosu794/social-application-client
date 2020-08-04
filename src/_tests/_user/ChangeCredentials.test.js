import React from "react";
import { shallow } from "enzyme";
import ChangeCredentials from "../../_components/user/ChangeCredentials";

describe("Test for the ChangeCredentials Component", () => {
  let wrapper = shallow(<ChangeCredentials />);
  test("should render ChangeCredentials correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should ChangeCredentials Component to be defined", () => {
    expect(wrapper).toBeDefined();
  });
});
