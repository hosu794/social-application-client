import { authActions } from "../../_actions";

import { authConstants } from "../../_constants";

import { mockServiceCreator, storeMiddlewares } from "../_testHelpers";

const requiredBody = {
  data: "dsda",
};

const expectedBody = {
  data: {
    success: true,
  },
};

describe("Test for the authentication actions", () => {
  beforeEach(() => {
    storeMiddlewares.clearActions();
  });

  test("should create an action to login", async () => {
    await storeMiddlewares
      .dispatch(
        authActions.login(
          { password: "pass", usernameOrEmail: "username" },
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            type: "LOGIN_REQUEST",
            user: { password: "pass", usernameOrEmail: "username" },
          },
          { type: "LOGIN_SUCCESS", user: { data: { success: true } } }
        )
      );
  });

  test("should create an action to register", async () => {
    await storeMiddlewares
      .dispatch(
        authActions.register(
          {
            username: "username",
            name: "name",
            email: "example@example.com",
            password: "password",
          },
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            type: "REGISTER_REQUEST",
            user: {
              email: "example@example.com",
              name: "name",
              password: "password",
              username: "username",
            },
          },
          { type: "REGISTER_SUCCESS", user: undefined },
          { message: "Registration successful", type: "ALERT_SUCCESS" }
        )
      );
  });

  test("should create an action to logout", () => {
    const expectedActions = {
      type: authConstants.LOGOUT,
    };

    expect(authActions.logout()).toEqual(expectedActions);
  });

  test("should create an action to updateUsername", async () => {
    await storeMiddlewares
      .dispatch(
        authActions.updateUsername("username", mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "UPDATE_USERNAME_REQUEST", username: "username" },
          { response: { success: true }, type: "UPDATE_USERNAME_SUCCESS" },
          { message: "Username updated successfully", type: "ALERT_SUCCESS" }
        )
      );
  });

  test("should craete an action to updatePassword", async () => {
    await storeMiddlewares
      .dispatch(
        authActions.updatePassword("password", mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { password: "password", type: "UPDATE_PASSWORD_REQUEST" },
          { response: { success: true }, type: "UPDATE_PASSWORD_SUCCESS" },
          { message: "Password updated successfully", type: "ALERT_SUCCESS" }
        )
      );
  });
});
