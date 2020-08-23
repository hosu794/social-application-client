import { fileActions } from "../../_actions";

import { fileConstants } from "../../_constants";

import { storeMiddlewares, mockServiceCreator } from "../_testHelpers";

describe("Test for the file actions", () => {
  beforeEach(() => {
    storeMiddlewares.clearActions();
  });

  test("should create an action to upload file", async () => {
    const requiredBody = {
      file: "DUMMY TEXT",
      data: {
        success: true,
      },
    };

    const expectedBody = {
      data: {
        success: true,
      },
    };
    await storeMiddlewares
      .dispatch(
        fileActions.uploadAvatar(requiredBody, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual({
          response: { success: true },
          type: "AVATAR_UPLOAD_SUCCESS",
        })
      );
  });
});
