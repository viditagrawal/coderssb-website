import React, { useState } from "react";
import Layout from "../components/Website_Layout/Layout";
import HomePage from "./HomePage";

export default function Index() {
  const [googleId, setGoogleId] = useState("");

  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <HomePage />
      </div>
    </Layout>
  );
}
