import { alertActions } from "../../_actions";

import { alertConstants } from "../../_constants";

describe("Alert Actions test", () => {
  test("should create an action to clear alert", () => {
    const expectedAction = {
      type: alertConstants.CLEAR,
    };

    expect(alertActions.clear()).toEqual(expectedAction);
  });

  test("should create an action to success message", () => {
    const message = "Succes alert";

    const expectedAction = {
      type: alertConstants.SUCCESS,
      message,
    };

    expect(alertActions.success(message)).toEqual(expectedAction);
  });

  test("should create an action to show error", () => {
    const message = new Error("Error alert");

    const expectedAction = {
      type: alertConstants.ERROR,
      message,
    };

    expect(alertActions.error(message)).toEqual(expectedAction);
  });

  test("should create an action to set alert", () => {
    const alert = "Alert message";

    const expectedAction = {
      type: alertConstants.SET,
      alert,
    };

    expect(alertActions.set(alert)).toEqual(expectedAction);
  });
});
