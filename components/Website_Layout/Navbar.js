import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import React, { useState } from 'react'

export default function navbar(props) {

  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  
  let navbarStyle = {
    width: "100%",
    backgroundColor: "#5ac0ca",
    height: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  let tabStyle = {
    color: "#fff",
    textDecoration: "none"
  };

  const responseGoogle = (googleUser) => {
    var googleId = googleUser.getId();
    let profile = googleUser.getBasicProfile();
    var username = profile.getEmail().split('@')[0];
    props.setGoogleId(googleId)
    setUsername(username)
    setLoggedIn(true)
  }

  return (
    <div style={navbarStyle}>
      <Link href="/">
        <a style={tabStyle}>Coders SB</a>
      </Link>
      <Link href="/samplePage">
        <a style={tabStyle}>sample</a>
      </Link>
      <Link href="/MerchandisePage">
        <a style={tabStyle}>Buy our Merchandise!</a>
      </Link>
      {loggedIn ? <p>{username}</p>:
      <GoogleLogin
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
        )}
        clientId= {process.env.LOCAL_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />}
    </div>
    
  );
}
