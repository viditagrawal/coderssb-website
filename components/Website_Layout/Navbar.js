import Link from "next/link";
import { GoogleLogin } from "react-google-login";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from 'react'
import '../../css/navbar.css'
>>>>>>> 6bcd8a8b3671155efd1f143e97f508d93d2d841a

export default function navbar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");

<<<<<<< HEAD
  let navbarStyle = {
    width: "100%",
    backgroundColor: "#5ac0ca",
    height: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
=======
  const [loggedIn, setLoggedIn] = useState(false)
  const [profileImgUrl, setProfileImgUrl] = useState("")
>>>>>>> 6bcd8a8b3671155efd1f143e97f508d93d2d841a

  useEffect(() => {
    if (props.googleUserObject)
    {
      setLoggedIn(true)
      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl)
    }
  }, [props.googleUserObject])

  const responseGoogle = (googleUser) => {
    props.setGoogleUserObject(googleUser)
  }

  return (
    <div className="navbar">
      <Link href="/">
        <img 
          style={{cursor: 'pointer'}}
          className="w3-image"
          src="logo.png"
          alt="Header"
          width="100"
          height="50"
        />
      </Link>
      <div>
        <Link href="/samplePage">
          <a className="tab">sample</a>
        </Link>
        <Link href="/MerchandisePage">
          <a className="tab">Buy our Merchandise!</a>
        </Link>
        <Link href="/CalendarPage">
        <a className="tab">Calendar</a>
      </Link>
        {loggedIn ? 
          <img style={{ borderRadius: '9999px', height: '3rem', width: '3rem' }} src={profileImgUrl} />
          :
          <GoogleLogin
            render={renderProps => (
              <button className="login" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
            )}
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />}
      </div>
    </div>

  );
}