import React from "react";
import google from "../../assets/google.svg";
import atlassian from "../../assets/atlassian.svg";
import dropbox from "../../assets/dropbox.svg";
import shopify from "../../assets/shopify.svg";
import slack from "../../assets/slack.svg";

import "./brand.css";

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  );
}

export default Brand;
