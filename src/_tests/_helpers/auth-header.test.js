const {
  authHeader,
  authHeaderUploadFile,
} = require("../../_helpers/auth-header");
const { mock } = require("fetch-mock");

describe("Test for the auth-header functions", () => {
  test("should return Authorizated header for the authHeader function", () => {
    let mockUser = {
      id: 12,
      username: "username",
      name: "Name",
    };

    let given = authHeader(mockUser);

    let expected = {
      Authorization: "Bearer null",
      "Content-Type": "application/json",
    };

    expect(given).toEqual(expected);
  });

  test("should return empty header for the authHeader function", () => {
    let mockUser = undefined;

    let given = authHeader(mockUser);

    let expected = {};

    expect(given).toEqual(expected);
  });

  test("should return Authorizated header for the authHeaderUploadFile function", () => {
    let mockUser = {
      id: 12,
      username: "username",
      name: "Name",
    };

    let given = authHeaderUploadFile(mockUser);

    let expected = {
      Authorization: "Bearer null",
    };

    expect(given).toEqual(expected);
  });

  test("should return empty object header for the authHeaderUploadFile function", () => {
    let mockUser = undefined;

    let given = authHeaderUploadFile(mockUser);

    let expected = {};

    expect(given).toEqual(expected);
  });
});
