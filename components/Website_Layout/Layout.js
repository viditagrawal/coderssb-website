import Navbar from "./Navbar";
import Head from "next/head";

const Layout = props => (
  <div>
    {/* We expose a built-in component for appending elements to the head of the page to add css*/}
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    </Head>
    <Navbar googleUserObject={props.googleUserObject} setGoogleUserObject={(obj) => props.setGoogleUserObject(obj)} />
    {props.children}
  </div>
);

export default Layout;
