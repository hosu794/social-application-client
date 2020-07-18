import { shallow } from "enzyme";

import React from "react";

import About from "../../_components/layout/About";

import LogoImage from "../../img/about.png";

describe("Tests for the About", () => {
  const wrapper = shallow(<About />);

  test("should render header", () => {
    expect(wrapper.find("h1").isEmpty()).toEqual(false);
  });

  test("should render section ", () => {
    expect(wrapper.find(".hero is-success is-fullheight").isEmpty()).toEqual(
      true
    );
  });

  test("should render hero-body ", () => {
    expect(wrapper.find(".hero-body").isEmpty()).toEqual(false);
  });

  test("should render image source", () => {
    expect(wrapper.find("img").prop("src")).toEqual(LogoImage);
  });

  test("should render container has-text-centered", () => {
    expect(wrapper.find("has-text-centered").isEmpty()).toEqual(true);
  });
});
