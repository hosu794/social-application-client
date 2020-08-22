import { paymentConstants } from "../_constants";
import { paymentService } from "../_services";

export function payment(state = {}, action) {
  switch (action.type) {
    case paymentConstants.PAY_PREMIUM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case paymentConstants.PAY_PREMIUM_SUCCESS:
      return {
        ...state,
        loading: false,
        paid: true,
      };
    case paymentConstants.PAY_PREMIUM_FAILURE:
      return {
        ...state,
        loading: false,
        paid: false,
      };
    default:
      return state;
  }
}
