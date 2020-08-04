import { authActions } from "../../_actions";

import { authConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

import fetchMock from "fetch-mock";
import { authService } from "../../_services";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

let store = mockStore({
  loggedIn: false,
});

describe("Test for the authentication actions", () => {
  test("should create an action to login", () => {
    const requiredBody = "Required body";

    store
      .dispatch(
        authActions.login(
          { usernameOrEmail: "username", password: "password" },
          mockServiceCreator("Required body")
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: authConstants.LOGIN_REQUEST,
          },
          { type: authConstants.LOGIN_SUCCESS, requiredBody }
        )
      );
  });

  test("should create an action to register", () => {
    store
      .dispatch(
        authActions.register(
          {
            username: "username",
            password: "password",
            name: "name",
            email: "email",
          },
          mockServiceCreator("Required body")
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: authConstants.REGISTER_REQUEST,
          },
          { type: authConstants.REGISTER_SUCCESS }
        )
      );
  });

  test("should create an action to logout", () => {
    const expectedActions = {
      type: authConstants.LOGOUT,
    };

    expect(authActions.logout()).toEqual(expectedActions);
  });

  test("should create an action to updateUsername", () => {
    let response = { isAvailable: false };

    store
      .dispatch(
        authActions.updateUsername("username", mockServiceCreator(response))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: authConstants.UPDATE_USERNAME_REQUEST,
          },
          {
            type: authConstants.UPDATE_USERNAME_SUCCESS,
            response,
          }
        )
      );
  });

  test("should craete an action to updatePassword", () => {
    let response = { isAvailable: true };

    store
      .dispatch(
        authActions.updatePassword("password", mockServiceCreator(response))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: authConstants.UPDATE_PASSWORD_REQUEST,
          },
          { type: authConstants.UPDATE_PASSWORD_SUCCESS, response }
        )
      );
  });
});
