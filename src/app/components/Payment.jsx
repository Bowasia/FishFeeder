import React from 'react'
import { nanoid } from 'nanoid';

export default function Payment() {

    const generateHmacSignature = (data, channelSecretKey) => {
        const hmac = crypto.createHmac('sha256', channelSecretKey);
        hmac.update(data)
        return hmac.digest('hex')
    }

    // Sample code for Request Payment API
const requestPayment = async () => {
    const uniqueNonce = Date.now().toString() + nanoid()
    const crypto = require('crypto')
    const channelId = '2003139835'; // Replace with your Channel ID
    const channelSecretKey = '2fc3ff5d8d8652e6c06623829b4fe92e'; // Replace with your Channel Secret Key
    const requestUrl = 'https://sandbox-api-pay.line.me/v3/payments/request';
    const headers = {
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': channelId,
      'X-LINE-Authorization-Nonce': uniqueNonce, // Replace with a unique nonce value
      'X-LINE-Authorization': 'GENERATED_SIGNATURE', // Replace with the HMAC signature
    };
    const body = {
      amount: 1000,
      currency: 'JPY',
      orderId: 'ORDER_ID', // Replace with your order ID
      packages: [
        {
          id: 'PACKAGE_ID', // Replace with your package ID
          amount: 1000,
          name: 'Product Package',
          products: [
            {
              name: 'Product Name',
              quantity: 1,
              price: 1000,
            },
          ],
        },
      ],
      redirectUrls: {
        confirmUrl: 'http://localhost:3000', // Replace with your confirm URL
        cancelUrl: 'http://localhost:3000/about', // Replace with your cancel URL
      },
    };
  
    try {
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Sample code for Confirm API
  const confirmPayment = async (transactionId) => {
    const channelId = 'YOUR_CHANNEL_ID'; // Replace with your Channel ID
    const channelSecretKey = 'YOUR_CHANNEL_SECRET_KEY'; // Replace with your Channel Secret Key
    const confirmUrl = `https://sandbox-api-pay.line.me/v3/payments/${transactionId}/confirm`;
    const headers = {
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': channelId,
      'X-LINE-Authorization-Nonce': 'UNIQUE_NONCE', // Replace with a unique nonce value
      'X-LINE-Authorization': 'GENERATED_SIGNATURE', // Replace with the HMAC signature
    };
    const body = {
      amount: 1000,
      currency: 'JPY',
    };
  
    try {
      const response = await fetch(confirmUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>Payment</div>
  )
}
