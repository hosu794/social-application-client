import { fileActions } from "../../_actions";

import { fileConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

let store = mockStore({});

describe("Test for the file actions", () => {
  test("should create an action to upload file", () => {
    const requiredBody = {
      file: "DUMMY TEXT",
    };

    store
      .dispatch(
        fileActions.uploadAvatar(requiredBody, mockServiceCreator(requiredBody))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: fileConstants.AVATAR_UPLOAD_REQUEST,
          },
          { type: fileConstants.AVATAR_UPLOAD_SUCCESS, requiredBody }
        )
      );
  });
});
