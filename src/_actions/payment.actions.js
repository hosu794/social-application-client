import { paymentConstants } from "../_constants";
import { alertActions } from "./";
import { history, handleResponse, authHeader } from "../_helpers";
import { paymentService } from "../_services";
import axios from "axios";

export const paymentActions = { payPremium };

function payPremium(payRequest, service = paymentService.payPremium) {
  return (dispatch) => {
    dispatch(request());

    return service(payRequest).then(
      (response) => {
        dispatch(success(response.data));

        dispatch(alertActions.success("Premium has bought successful"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request() {
    return { type: paymentConstants.PAY_PREMIUM_REQUEST };
  }

  function success(response) {
    return {
      type: paymentConstants.PAY_PREMIUM_SUCCESS,
      response,
    };
  }

  function failure(error) {
    return {
      type: paymentConstants.PAY_PREMIUM_FAILURE,
      error,
    };
  }
}
