import React from "react";

import StripeCheckout from "react-stripe-checkout";

import configureStore from "redux-mock-store";
import { useDispatch, Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

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
        <StripeButton price="10" />
      </Provider>
    </MemoryRouter>
  );

  let wrapper = mount(<TestingComponent />);

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should component be defined", () => {
    expect(StripeButton).toBeDefined();
  });

  test("should component has correct props", () => {
    let element = wrapper.find(StripeButton).props().price;

    expect(element).toEqual("10");
  });
  test("should StripeButton has correct props", () => {
    let element = wrapper.find(StripeCheckout).prop("label");
    expect(element).toEqual("Buy premium");
  });
});
