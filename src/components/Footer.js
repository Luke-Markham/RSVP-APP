import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="Footer">
      <h3>RSVP</h3>
      <p>Enjoy The Party</p>
      <HashLink className="bk2top" to="#top">
        {" "}
        Back To Top
      </HashLink>
    </footer>
  );
};

export default Footer;
