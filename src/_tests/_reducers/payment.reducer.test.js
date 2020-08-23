import { payment } from "../../_reducers/payment.reducer";
import { paymentConstants } from "../../_constants";
import { fakeServer } from "sinon";

let initialState = {};

describe("Tests for the payment reducers", () => {
  test("should return initialState", () => {
    expect(payment(undefined, {})).toEqual(initialState);
  });

  test("should handles payPremiumRequest", () => {
    expect(
      payment(initialState, { type: paymentConstants.PAY_PREMIUM_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles payPremiumSuccess", () => {
    expect(
      payment(initialState, { type: paymentConstants.PAY_PREMIUM_SUCCESS })
    ).toEqual({
      ...initialState,
      loading: false,
      paid: true,
    });
  });

  test("should handles payPremiumFailure", () => {
    expect(
      payment(initialState, { type: paymentConstants.PAY_PREMIUM_FAILURE })
    ).toEqual({
      ...initialState,
      loading: false,
      paid: false,
    });
  });
});
