const { shallow } = require("enzyme");

import React from "react";
const {
  default: ClearErrorButton,
} = require("../../_components/auth/ClearErrorButton");

let randomText = "Some text";

describe("Test for the ClearErrorButton", () => {
  let wrapper = shallow(<ClearErrorButton>{randomText}</ClearErrorButton>);

  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("should component have correctly text value", () => {
    let element = wrapper.find("div").text();

    expect(element).toEqual(randomText);
  });
});
