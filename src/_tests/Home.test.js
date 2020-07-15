import { shallow } from "enzyme";

import React from "react";

import Home from "../_components/layout/Home";

import Image from "../img/pluto-delete-confirmation-1.png";

describe("Tests for the Home Component", () => {
  const wrapper = shallow(<Home />);

  test("should render button ", () => {
    expect(wrapper.find("button").text()).toEqual("Write");
  });

  test("should render button is has class button", () => {
    expect(wrapper.find("button").hasClass("button")).toEqual(true);
  });

  test("should render button is has class ", () => {
    expect(wrapper.find("button").hasClass("is-primary")).toEqual(true);
  });

  test("should render button is has class is-light", () => {
    expect(wrapper.find("button").hasClass("is-light")).toEqual(true);
  });

  test("should render button is has class is-large", () => {
    expect(wrapper.find("button").hasClass("is-large")).toEqual(true);
  });

  test("should image have correct source", () => {
    expect(wrapper.find("img").prop("src")).toEqual(Image);
  });

  test("should Link Component should have correct prop", () => {
    expect(wrapper.find("Link").prop("to")).toEqual("/dashboard");
  });

  test("should h1 have correct text message", () => {
    expect(wrapper.find("h1").text()).toEqual(
      "Join a community of writers around the world."
    );
  });
});
