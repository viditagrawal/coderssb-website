import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import React, { useEffect, useState } from "react";
import "../../css/navbar.css";

export default function navbar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");

  let navbarStyle = {
    width: "100%",
    backgroundColor: "#5ac0ca",
    height: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  useEffect(() => {
    if (props.googleUserObject) {
      setLoggedIn(true);
      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);
    }
  }, [props.googleUserObject]);

  const responseGoogle = googleUser => {
    props.setGoogleUserObject(googleUser);
  };

  return (
    <div className="navbar">
      <Link href="/">
        <img className="w3-image logo" src="logo.png" alt="Header" />
      </Link>
      <div>
        <Link href="/About">
          <a className="tab">About Us</a>
        </Link>
        <Link href="/ResourcesPage">
          <a className="tab">Useful Resources</a>
        </Link>
        <Link href="/MerchandisePage">
          <a className="tab">Coders SB Merch</a>
        </Link>
        <Link href="/CalendarPage">
          <a className="tab">Calendar</a>
        </Link>
        {loggedIn ? (
          <Link href="/UserProfilePage">
            <img className="profile" src={profileImgUrl} />
          </Link>
        ) : (
          <GoogleLogin
            render={renderProps => (
              <button
                className="login"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login
              </button>
            )}
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
      {/* <p style={{width: "100vw", position: "absolute", backgroundColor: "gray", alignSelf: 'flex-end'}}>logout</p> */}
    </div>
  );
}
