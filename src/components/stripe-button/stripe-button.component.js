import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IRWuJGTOtVemFffLvMiPyZSizPaUYK6KyBZHA77ew8P2r1m6vjCfAHapGXGmN3sjdveYtPT0ntPvohjLh9cOCvW00dnsbeV8g';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://cdn5.vectorstock.com/i/1000x1000/16/79/king-crown-isolated-icon-vector-19591679.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
