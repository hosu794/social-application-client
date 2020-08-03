const initialState = {};

import { alert } from "../../_reducers/alert.reducer";
import { alertConstants } from "../../_constants";

describe("Test for the alert reducer", () => {
  test("should returns the initialState", () => {
    expect(alert(undefined, {})).toEqual(initialState);
  });

  test("should handles alert-success", () => {
    expect(
      alert(initialState, {
        type: alertConstants.SUCCESS,
        message: "Some message",
      })
    ).toEqual({
      ...initialState,
      type: "alert-success",
      message: "Some message",
    });
  });

  test("should handles alert-danger", () => {
    expect(
      alert(initialState, {
        type: alertConstants.ERROR,
        message: "Bad message",
      })
    ).toEqual({
      ...initialState,
      type: "alert-danger",
      message: "Bad message",
    });
  });

  test("should handles clear", () => {
    expect(
      alert({ type: "alert-danger" }, { type: alertConstants.CLEAR })
    ).toEqual(initialState);
  });

  test("should handles set", () => {
    expect(
      alert(initialState, {
        type: alertConstants.SET,
        alert: { type: "some-type", message: "message" },
      })
    ).toEqual({
      ...initialState,
      type: "some-type",
      message: "message",
    });
  });
});
