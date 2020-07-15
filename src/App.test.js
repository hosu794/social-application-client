import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";

import Footer from "./_components/layout/Footer";

describe("Test for App", () => {
  const wrapper = shallow(<Footer />);

  test("renders learn react link", () => {
    expect(wrapper.find("strong").text()).toContain("The Writer's Mind");
  });
});
