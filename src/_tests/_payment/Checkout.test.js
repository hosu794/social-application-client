import React from "react";

import configureStore from "redux-mock-store";
import { useDispatch, Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Checkout from "../../_components/payment/Checkout";
import { mount } from "enzyme";
import { wrap } from "lodash";
import StripeButton from "../../_components/payment/StripeButton";

const mockStore = configureStore([]);

let store = mockStore({
  payment: {
    loading: false,
  },
});

describe("Test for the Checkout Component", () => {
  let TestingComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Checkout />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(Checkout).toBeDefined();
  });

  test("should exists StripeButton Component", () => {
    console.log(wrapper.debug());
    let element = wrapper.contains(<StripeButton price="10" />);
    expect(element).toEqual(true);
  });
});
