import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { paymentActions } from "../../_actions";

const StripeButton = ({ price }) => {
  const publishableKey =
    "pk_test_51HHQd4LYlgXeVHLv1FHC3ZDuVHoNlp8plCWpl7ATrvCATEr5TbjADjUg103jxLHN8Sd48E15SRsboSOdiylwo41W00MeR6h1uY";
  const stripePrice = price * 1000;

  const dispatch = useDispatch();

  const onToken = (token) => {
    console.log(token);
    alert("Success");
    dispatch(
      paymentActions.payPremium({
        amount: stripePrice,
        token,
      })
    );
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Buy premium"
      name="The Writer's Mind"
      image="https://simpleicon.com/wp-content/uploads/account.png"
      description={`Your total is ${price}$`}
      panelLabel="Buy premium"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.string.isRequired,
};

export default StripeButton;
