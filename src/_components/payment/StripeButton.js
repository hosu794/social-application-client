import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const publishableKey =
    "pk_test_51HHQd4LYlgXeVHLv1FHC3ZDuVHoNlp8plCWpl7ATrvCATEr5TbjADjUg103jxLHN8Sd48E15SRsboSOdiylwo41W00MeR6h1uY";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Success");
    // axios
    //   .post("http://localhost:8083/payment", {
    //     amount: stripePrice,
    //     token,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     alert("payment success");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("Payment failed");
    //   });
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

export default StripeButton;
