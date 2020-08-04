const { handleResponse } = require("../../_helpers");

describe("Tests for the handleResponse function", () => {
  const mockCallBack = jest.fn();
  let mockService = {
    logout: mockCallBack,
  };

  test("should call a mock function", () => {
    let mockError = {
      response: {
        status: 401,
      },
    };

    handleResponse(mockError, mockService);

    expect(mockCallBack).toHaveBeenCalled();
  });

  test("should return empty object ", () => {
    let mockError = {
      response: {
        status: 404,
      },
    };

    let given = handleResponse(mockError, mockService);

    let expected = mockError;

    expect(given).toEqual(expected);
  });
});
