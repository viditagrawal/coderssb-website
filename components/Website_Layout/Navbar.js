import Link from "next/link";
import { GoogleLogin } from "react-google-login";

export default function navbar(props) {
  
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
    console.log(googleId)
    props.setGoogleId(googleId)
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
      <GoogleLogin
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
        )}
        clientId= {process.env.LOCAL_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
    
  );
}
