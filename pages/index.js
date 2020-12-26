import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../components/Website_Layout/Layout";
import Home from "./Home";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
