import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import React, { useEffect, useState } from "react";
import "../../css/navbar.css";
import "../../css/Dropdown.css";

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
    if (props.googleUserObject && props.googleUserObject.profileObj) {
      setLoggedIn(true);
      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);
    }
  }, [props.googleUserObject]);

  const responseGoogle = googleUser => {
    props.setGoogleUserObject(googleUser);
  };

  function handleDropDownMenuItem() {
    <a className="tab">Peorja</a>;
  }

  return (
    <div className="navbar">
      <Link href="/">
        <img
            className="main_title_logo"
            src="redesign/logo.svg"
            alt="blue coders sb logo"
        />
      </Link>
      <div>
        <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <Link href="/Officers">
              <a className="navDropDown">Our Team</a>
            </Link>
          </div>
        </div>
        <Link href="/Resources">
          <a className="tab">Useful Resources</a>
        </Link>
        <Link href="/Merchandise">
          <a className="tab">Merchandise</a>
        </Link>
        <Link href="/ProjectSeries">
          <a className="tab">Project Series</a>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Events</button>
          <div className="dropdown-content">
            <Link href="/Calendar">
              <a className="navDropDown">Calendar</a>
            </Link>
          </div>
        </div>
        {loggedIn ? (
          <Link href="/UserProfile">
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