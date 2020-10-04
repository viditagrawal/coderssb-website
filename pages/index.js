import React, { useState, useEffect } from 'react'
import Layout from "../components/Website_Layout/Layout";
import HomePage from "./HomePage";

export default function Index() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
