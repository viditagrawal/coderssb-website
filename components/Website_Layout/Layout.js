import Navbar from "./Navbar";
import Head from "next/head";
import FooterPage from "./FooterPage";
import React, { useState, useEffect } from "react";

function Layout(props) {
  const [googleUserObject, setGoogleUserObject] = useState(null);

  useEffect(() => {
    if (googleUserObject)
      localStorage.setItem(
        "googleUserObject",
        JSON.stringify(googleUserObject)
      );
    else {
      let googleUserObject = JSON.parse(
        localStorage.getItem("googleUserObject")
      );
      if (googleUserObject) setGoogleUserObject(googleUserObject);
    }
  }, [googleUserObject]);

  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      return React.cloneElement(child, { googleUserObject: googleUserObject });
    }
  );

  return (
    <div>
      {/* We expose a built-in component for appending elements to the head of the page to add css*/}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar
        googleUserObject={googleUserObject}
        setGoogleUserObject={obj => setGoogleUserObject(obj)}
      />
      {childrenWithProps}
      <FooterPage />
    </div>
  );
}

export default Layout;
