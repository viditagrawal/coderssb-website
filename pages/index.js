<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from 'react'
>>>>>>> 6bcd8a8b3671155efd1f143e97f508d93d2d841a
import Layout from "../components/Website_Layout/Layout";
import HomePage from "./HomePage";

export default function Index() {
<<<<<<< HEAD
  const [googleId, setGoogleId] = useState("");

  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
=======

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
>>>>>>> 6bcd8a8b3671155efd1f143e97f508d93d2d841a
      <div>
        <HomePage />
      </div>
    </Layout>
  );
}
