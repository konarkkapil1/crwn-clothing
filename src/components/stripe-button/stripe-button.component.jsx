import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_HXrAnM9vTotiZ9jWwL02GvN1008t2hMy2L'
    
    const onToken = Token => {
        console.log(Token)
        alert('Payment Successful')
    }
    
    return(
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing LTD'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton