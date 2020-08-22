import { authHeader } from "../_helpers";
import axios from "axios";

export const paymentService = { payPremium };

function payPremium(request) {
  return axios.post(
    "https://the-writer-mind.herokuapp.com/api/payment/premium",
    request,
    {
      headers: authHeader(),
    }
  );
}
