import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import {
  StripeProvider,
  Elements,
  CardCVCElement,
} from "react-stripe-elements";
// import CheckoutForm from "./CheckoutForm.js";
import {
  CardElement,
  useStripe,
  useElements,
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LlrDQFPgL0mM7sR4FMxVktMujwKrgAVOqjVsYATVc6leXCDO5TqNZ2DFxtt1yZ4j1Msnk5FySzDQL5lW4rmumfS00f48davd8"
).then((res) => {
  console.log("res : ", res);
  return res;
});

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <div className="checkout-form">
      <p>Amount: $0</p>
      <form onSubmit={handleSubmit}>
        {/* <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCvcElement />
        </label> */}
         <PaymentElement />
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  );
};

const Checkout = (props) => {
  return (
    // <StripeProvider apiKey="pk_test_51LlrDQFPgL0mM7sR4FMxVktMujwKrgAVOqjVsYATVc6leXCDO5TqNZ2DFxtt1yZ4j1Msnk5FySzDQL5lW4rmumfS00f48davd8">
    <>
      <CheckoutForm {...props} />
    </>
    // </StripeProvider>
  );
};

export default Checkout;
