import React from "react";
import { MemoryRouter, Link } from "react-router-dom";
import AuthButtons from "../../_components/auth/AuthButtons";
import { mount } from "enzyme";

describe("Test for the AuthButtons", () => {
  const TestingComponent = () => (
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined", () => {
    expect(AuthButtons).toBeDefined();
  });

  test("should first Link constains correct value", () => {
    let element = wrapper.find(Link).at(0);
    expect(element.contains(<strong>Sign up</strong>)).toEqual(true);
  });

  test("should second Link constains correct value ", () => {
    let element = wrapper.find(Link).at(1);
    expect(element.text()).toEqual("Log in");
  });

  test("should first Link have correct classes", () => {
    let element = wrapper.find(Link).at(0);
    expect(element.hasClass("button is-primary")).toEqual(true);
  });

  test("should second Link have correct classes", () => {
    let element = wrapper.find(Link).at(1);
    expect(element.hasClass("button is-light")).toEqual(true);
  });
});
