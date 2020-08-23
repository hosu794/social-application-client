import { user } from "../../_reducers/user.reducer";
import { userConstants, paymentConstants } from "../../_constants";
import FormItemInput from "antd/lib/form/FormItemInput";
import { payment } from "../../_reducers/payment.reducer";

let initialState = {};

let mockUser = {
  id: 12,
  username: "username",
  name: "name",
};

let mockError = new Error("User reducer error");

describe("Tests for the user reducer", () => {
  test("should return state", () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  test("should handles getCurrentUserRequest", () => {
    expect(
      user(initialState, { type: userConstants.GET_CURRENT_USER_REQUEST })
    ).toEqual({
      loadingUser: true,
    });
  });

  test("should handles getCurrentUserSuccess", () => {
    expect(
      user(initialState, {
        type: userConstants.GET_CURRENT_USER_SUCCESS,
        user: mockUser,
      })
    ).toEqual({
      loadedUser: true,
      user: mockUser,
    });
  });

  test("should handles getCurrentUserFailure", () => {
    expect(
      user(initialState, {
        type: userConstants.GET_CURRENT_USER_FAILURE,
        error: mockError,
      })
    ).toEqual({});
  });

  test("should handles checkUserAvaibilityRequest", () => {
    expect(
      user(initialState, {
        type: userConstants.CHECK_USER_AVAIBILITY_REQUEST,
      })
    ).toEqual({
      ...initialState,
      checkingUsername: true,
    });
  });

  test("should handles checkUserAvaibilitySuccess", () => {
    expect(
      user(initialState, {
        type: userConstants.CHECK_USER_AVAIBILITY_SUCCESS,
        response: true,
      })
    ).toEqual({
      ...initialState,
      checkingUsername: false,
      checkedUsername: true,
      isUsernameAvailable: true,
    });
  });

  test("should handles checkUserAvaibilityFailure", () => {
    expect(
      user(initialState, {
        type: userConstants.CHECK_USER_AVAIBILITY_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      checkingUsername: false,
    });
  });

  test("should handles checkEmailAvaibilityFailure", () => {
    expect(
      user(initialState, { type: userConstants.CHECK_EMAIL_AVAIBILITY_FAILURE })
    ).toEqual({ ...initialState, checkingEmail: false });
  });

  test("should handles checkEmailAvaibilityRequest", () => {
    expect(
      user(initialState, { type: userConstants.CHECK_EMAIL_AVAIBILTY_REQUEST })
    ).toEqual({
      ...initialState,
      checkingEmail: true,
    });
  });

  test("should handles getUserStatsSuccess", () => {
    expect(
      user(initialState, {
        type: userConstants.GET_USER_STATS_SUCCESS,
        response: true,
      })
    ).toEqual({
      ...initialState,
      loadingStats: false,
      loadedStats: true,
      stats: true,
    });
  });

  test("should handles checkEmailAvaibilitySuccess", () => {
    expect(
      user(initialState, {
        type: userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS,
        response: true,
      })
    ).toEqual({
      ...initialState,
      checkingEmail: false,
      checkedEmail: true,
      isEmailAvailable: true,
    });
  });

  test("should handles checkLoveAvailavilityRequest", () => {
    expect(
      user(initialState, { type: userConstants.CHECK_LOVE_AVAIBILITY_REQUEST })
    ).toEqual({
      ...initialState,
      checkingLove: true,
    });
  });

  test("should handles getUserStatsRequest", () => {
    expect(
      user(initialState, { type: userConstants.GET_USER_STATS_REQUEST })
    ).toEqual({
      ...initialState,
      loadingStats: true,
    });
  });

  test("should handles getUserStatsFailure", () => {
    expect(
      user(initialState, {
        type: userConstants.GET_USER_STATS_FAILURE,
      })
    ).toEqual({
      ...initialState,
      loadingStats: false,
      loadedStats: false,
    });
  });

  test("should handles checkingLoveAvaibilityFailure", () => {
    expect(
      user(initialState, {
        type: userConstants.CHECK_LOVE_AVAIBILITY_FAILURE,
      })
    ).toEqual({
      ...initialState,
      checkingLove: false,
    });
  });

  test("should handles checkLoveAvaibilitySuccess", () => {
    expect(
      user(initialState, {
        type: userConstants.CHECK_LOVE_AVAIBILITY_SUCCESS,
        response: true,
      })
    ).toEqual({
      ...initialState,
      checkingLove: false,
      isUserLovedStory: true,
    });
  });

  test("should handles payPremiumSuccess", () => {
    expect(
      user(initialState, {
        type: paymentConstants.PAY_PREMIUM_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      user: {
        premium: true,
      },
    });
  });
});
