import React, { useState, useEffect } from 'react'
import Layout from "../components/Website_Layout/Layout";
import HomePage from "./HomePage";

export default function Index() {

  const [googleUserObject, setGoogleUserObject] = useState(null)

  useEffect (() => {
    if (googleUserObject) localStorage.setItem('googleUserObject', JSON.stringify(googleUserObject))
    else {
      let googleUserObject = JSON.parse(localStorage.getItem('googleUserObject'));
      if (googleUserObject) setGoogleUserObject(googleUserObject)
    }
  }, [googleUserObject]) 

  return (
    <Layout googleUserObject={googleUserObject} setGoogleUserObject={(obj) => setGoogleUserObject(obj)}>
      <div>
        <HomePage />
      </div>
    </Layout>
  );
}
