import { authentication } from "../../_reducers/authentication.reducer";
import { authConstants } from "../../_constants";
import { mock } from "fetch-mock";
import { initial } from "lodash";

let intialState = {
  loggedIn: false,
};

let mockUser = {
  id: 12,
  username: "username",
  name: "name",
};

let mockError = new Error("Some Error");

describe("Tests for the authentication reducer", () => {
  test("should return intialState", () => {
    expect(authentication(undefined, {})).toEqual(intialState);
  });

  test("should handles login request", () => {
    expect(
      authentication(intialState, {
        type: authConstants.LOGIN_REQUEST,
        user: mockUser,
      })
    ).toEqual({
      loggingIn: true,
      loading: true,
      user: mockUser,
    });
  });

  test("should handles login success", () => {
    expect(
      authentication(intialState, {
        type: authConstants.LOGIN_SUCCESS,
        user: mockUser,
      })
    ).toEqual({
      loggedIn: true,
      user: mockUser,
      loading: false,
    });
  });

  test("should handles login failure", () => {
    expect(
      authentication(intialState, {
        type: authConstants.LOGIN_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...intialState,
      loading: false,
      loggedIn: false,
      error: mockError,
    });
  });

  test("should handles logout", () => {
    expect(
      authentication(intialState, {
        type: authConstants.LOGOUT,
      })
    ).toEqual({
      ...intialState,
      loading: false,
      loggedIn: false,
    });
  });

  test("should handles clear errors", () => {
    expect(
      authentication(intialState, {
        type: authConstants.CLEAR_ERROR,
      })
    ).toEqual({
      ...intialState,
      error: null,
    });
  });
});
