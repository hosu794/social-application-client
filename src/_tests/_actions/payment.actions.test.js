import { paymentActions } from "../../_actions";

import { paymentConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import { mockServiceCreator, storeMiddlewares } from "../_testHelpers";
import { before } from "lodash";
import { store } from "../../_helpers";

describe("Test for the payment actions", () => {
  beforeEach(() => {
    storeMiddlewares.clearActions();
  });

  test("should create an action getCommentsByUserId", async () => {
    const requiredBody = {
      amount: 232,
      token: {
        id: "asdadad",
      },
      data: {
        token: "dsdada",
      },
    };

    const expectedBody = {
      premium: true,
      data: {
        premium: true,
      },
    };

    await storeMiddlewares
      .dispatch(
        paymentActions.payPremium(
          requiredBody,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "PAY_PREMIUM_REQUEST" },
          {
            response: {
              premium: true,
            },
            type: "PAY_PREMIUM_SUCCESS",
          },
          { message: "Premium has bought successful", type: "ALERT_SUCCESS" }
        )
      );
  });
});
