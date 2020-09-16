import React from "react";
import companyImages from "../../utils/companies";
import Gallery from "react-grid-gallery";

export default function Companies() {
  return <Gallery images={companyImages} enableImageSelection={false} />;
}
