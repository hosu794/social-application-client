import { files } from "../../_reducers/file.reducer";
import { fileConstants } from "../../_constants";

let initialState = {};

let mockError = new Error("File Upload Error");

describe("Tests for the file reducers", () => {
  test("should return initialState", () => {
    expect(files(undefined, {})).toEqual(initialState);
  });

  test("should hanldes avatar upload request", () => {
    expect(
      files(initialState, { type: fileConstants.AVATAR_UPLOAD_REQUEST })
    ).toEqual({
      ...initialState,
      uploading: true,
    });
  });

  test("should handles avatar upload success", () => {
    expect(
      files(initialState, { type: fileConstants.AVATAR_UPLOAD_SUCCESS })
    ).toEqual({
      uploading: false,
      uploaded: true,
    });
  });

  test("should handles avatar upload failure", () => {
    expect(
      files(initialState, {
        type: fileConstants.AVATAR_UPLOAD_FAILURE,
        error: mockError,
      })
    ).toEqual({
      uploaded: false,
      uploading: false,
      error: mockError,
    });
  });
});
