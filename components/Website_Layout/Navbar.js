import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import React, { useEffect, useState } from 'react'
import '../../css/navbar.css'

export default function navbar(props) {

  const [loggedIn, setLoggedIn] = useState(false)
  const [profileImgUrl, setProfileImgUrl] = useState("")

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
