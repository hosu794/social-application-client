import { registration } from "../../_reducers/registration,reducer";

import { authConstants } from "../../_constants";

let initialState = {};

describe("Tests for the registration reducer", () => {
  test("should return initialState", () => {
    expect(registration(undefined, {})).toEqual(initialState);
  });

  test("should handles registering request", () => {
    expect(
      registration(initialState, { type: authConstants.REGISTER_REQUEST })
    ).toEqual({
      ...initialState,
      registering: true,
    });
  });

  test("should handles registering success", () => {
    expect(
      registration(initialState, { type: authConstants.REGISTER_SUCCESS })
    ).toEqual({});
  });

  test("should handles registering failure", () => {
    expect(
      registration(initialState, { type: authConstants.REGISTER_FAILURE })
    ).toEqual({});
  });
});
