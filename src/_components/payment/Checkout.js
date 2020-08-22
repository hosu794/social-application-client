import React from "react";

import { Link } from "react-router-dom";
import StripeButton from "./StripeButton";

function Checkout() {
  return (
    <div>
      <div className="level-item has-text-centered">
        <div>
          <StripeButton price="10" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
