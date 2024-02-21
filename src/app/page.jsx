'use client'
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import GetLIFF from "./components/GetLIFF";
import Payment from "./components/Payment";

import { nanoid } from "nanoid";

const crypto = require('crypto')
const ChannelID = '2003139835'; // Replace with your Channel ID
const ChannelSecretKey = '2fc3ff5d8d8652e6c06623829b4fe92e'; // Replace with your Channel Secret Key
const baseUrl = 'https://sandbox-api-pay.line.me';
const pathUrl = '/v3/payments/request'

const requestUrl = baseUrl + pathUrl;
const uniqueNonce = () => Date.now().toString() + nanoid()
// const headers = {
//   'Content-Type': 'application/json',
//   'X-LINE-ChannelId': ChannelID,
//   'X-LINE-Authorization-Nonce': uniqueNonce, // Replace with a unique nonce value
//   'X-LINE-Authorization': generateHmacSignature(body, ChannelSecretKey), // Replace with the HMAC signature
// };



export default function Home() {

  const genHeader = (ChannelID, ChannelSecret, URL, RequestDetail, nonce) => {
    if (typeof RequestDetail !== "string") {
      RequestDetail = JSON.stringify(RequestDetail);
    }
    const data = ChannelSecret + URL + RequestDetail + nonce;
    const signature = crypto.createHmac("SHA256", ChannelSecret).update(data).digest("base64").toString();
    return {
      "Content-Type": "application/json",
      "X-LINE-ChannelId": ChannelID,
      "X-LINE-Authorization-Nonce": nonce,
      "X-LINE-Authorization": signature
    };
  };

  const RequestBody = {
    amount: 15,
      currency: 'THB',
      orderId: '1', 
      packages: [
        {
          id: '01A', 
          amount: 1,
          name: 'Package name',
          products: [
            {
              name: 'Fish Feeder Pass',
              quantity: 1,
              price: 15,
            },
          ],
        },
      ],
      redirectUrls: {
        confirmUrl: 'http://localhost:3000/about', // Replace with your confirm URL
        cancelUrl: 'http://localhost:3000/', // Replace with your cancel URL
      },
  }

  const handleClick = async () => {
    var header = genHeader(ChannelId, ChannelSecret, pathUrl, RequestBody, uniqueNonce());
    try {
      const response = await fetch(requestUrl,
        {
          method: 'POST',
          headers: header,
          body: JSON.stringify(RequestBody)
        })
      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.log(error)
    }
    
  } 

  return (
    <>
      <Nav />
      <GetLIFF />
      <button onClick={handleClick}>Make purchase</button>
      {/* <Payment /> */}
    </>
  );
}
