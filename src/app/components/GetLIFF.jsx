"use client"
import React from 'react'
import liff from "@line/liff";
import { useState,useEffect } from "react";

export default function GetLIFF({ Component, pageProps }) {
    const [liffObject, setLiffObject] = useState(null);
    const [liffError, setLiffError] = useState(null);
    const [userName, setUserName] = useState(null)
    const [userID, setUserID]  = useState(null)
    const [userImg, setUserImg] = useState(null)
  
      // Execute liff.init() when the app is initialized
      useEffect(() => {
        console.log("start liff.init()...");
        liff
          .init({ 
            liffId: "2002295222-rN1W6zoJ",
            withLoginOnExternalBrowser: true,})
          .then(() => {
            console.log("liff.init() done");
            setLiffObject(liff);
          })
          .catch((error) => {
            console.log(`liff.init() failed: ${error}`);
            if (!process.env.liffId) {
              console.info(
                "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
              );
            }
            setLiffError(error.toString());
          });

          liff
            .getProfile()
            .then((profile) => {
            setUserName(profile.displayName)
            setUserImg(profile.pictureUrl)
            setUserID(profile.userId)
          }).catch(err => console.error(err))
      }, []);
  
      // Provide `liff` object and `liffError` object
    // to page component as property
    // pageProps.liff = liffObject;
    // pageProps.liffError = liffError;
  
    return (
      <>
      <h1>Hello { userName }</h1>
      <h3>Your User ID is {userID}</h3>
      <img src={userImg}/>
      <button>This is just button</button>
      </>
    );
  }
