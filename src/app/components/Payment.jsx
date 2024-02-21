// "use client"
// import React from 'react'
// import { nanoid } from 'nanoid';

// const uniqueNonce = Date.now().toString() + nanoid()
// const crypto = require('crypto')
// const channelId = '2003139835'; // Replace with your Channel ID
// const channelSecretKey = '2fc3ff5d8d8652e6c06623829b4fe92e'; // Replace with your Channel Secret Key
// const baseUrl = 'https://sandbox-api-pay.line.me';
// const requestUrl = '/v3/payments/request';
// const headers = {
//   'Content-Type': 'application/json',
//   'X-LINE-ChannelId': channelId,
//   'X-LINE-Authorization-Nonce': uniqueNonce, // Replace with a unique nonce value
//   'X-LINE-Authorization': generateHmacSignature(body, channelSecretKey), // Replace with the HMAC signature
// };

// export default function Payment() {

//     const generateHmacSignature = (data, channelSecretKey) => {
//         const hmac = crypto.createHmac('sha256', channelSecretKey);
//         hmac.update(data)
//         return hmac.digest('hex')
//     }

//     // Sample code for Request Payment API
// const requestPayment = async () => {
    
//     const body = {
//       amount: 15,
//       currency: 'THB',
//       orderId: '1', 
//       packages: [
//         {
//           id: '01A', 
//           amount: 1,
//           name: 'Package name',
//           products: [
//             {
//               name: 'Fish Feeder Pass',
//               quantity: 1,
//               price: 15,
//             },
//           ],
//         },
//       ],
//       redirectUrls: {
//         confirmUrl: 'http://localhost:3000/about', // Replace with your confirm URL
//         cancelUrl: 'http://localhost:3000/', // Replace with your cancel URL
//       },
//     };
  
//     try {
//       const response = await fetch(requestUrl, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(body),
//       });
//       const responseData = await response.json();
//       console.log(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   // // Sample code for Confirm API
//   // const confirmPayment = async (transactionId) => {
//   //   const channelId = '2003139835'; // Replace with your Channel ID
//   //   const channelSecretKey = '2fc3ff5d8d8652e6c06623829b4fe92e'; // Replace with your Channel Secret Key
//   //   const confirmUrl = `https://sandbox-api-pay.line.me/v3/payments/${transactionId}/confirm`;
//   //   const headers = {
//   //     'Content-Type': 'application/json',
//   //     'X-LINE-ChannelId': channelId,
//   //     'X-LINE-Authorization-Nonce': 'UNIQUE_NONCE', // Replace with a unique nonce value
//   //     'X-LINE-Authorization': 'GENERATED_SIGNATURE', // Replace with the HMAC signature
//   //   };
//   //   const body = {
//   //     amount: 1000,
//   //     currency: 'JPY',
//   //   };
  
//   //   try {
//   //     const response = await fetch(confirmUrl, {
//   //       method: 'POST',
//   //       headers: headers,
//   //       body: JSON.stringify(body),
//   //     });
//   //     const responseData = await response.json();
//   //     console.log(responseData);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
  
//   return (
//     <button onClick={() => {requestPayment()}}> Make transaction </button>
//   )
// }
