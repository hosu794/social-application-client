import { fileActions } from "../../_actions";

import { fileConstants } from "../../_constants";

import { storeMiddlewares, mockServiceCreator } from "../_testHelpers";

describe("Test for the file actions", () => {
  test("should create an action to upload file", () => {
    const requiredBody = {
      file: "DUMMY TEXT",
    };

    storeMiddlewares
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
