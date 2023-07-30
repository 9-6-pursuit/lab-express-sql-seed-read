import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div style={footerStyle}>
      <div
        style={{ ...socialStyle, display: "flex", justifyContent: "center" }}
      >
        <a
          href="https://github.com/lakishaJohnson"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/Lakisha66756205"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/lakisha-johnson-0b0587219/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p>
        &copy; {new Date().getFullYear()} Pursuit Fellowship 9_6. All rights
        reserved.
      </p>
    </div>
  );
}

// FOOTER CSS
const footerStyle = {
  backgroundColor: "#c9294a",
  padding: "5px",
  textAlign: "center",
};

const socialStyle = {
  marginTop: "10px",
};

const iconLinkStyle = {
  margin: "0 10px",
  paddingBottom: "5px"
};

export default Footer;
