import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-color">
        <div className="footer-color-shift">
          <h4>VISIT US</h4>
          <p>
            CodeSquad Comics
            <br />
            123 Dorchester Avenue
            <br />
            Boston, MA 02124
          </p>
        </div>
        <br />
        <div className="footer-color-shift">
          <h4>LINKS</h4>
          <p>
            <a href="/">Home</a>
            <br />
            <a href="/about">About</a>
            <br />
            <a href="/login">Login</a>
          </p>
        </div>
        <div className="footer-color-shift">
          <h4>FOLLOW US</h4>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <br />
          <a href="#">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <br />
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <br />
        </div>
        <div className="footer-color-shift">
          <h4>A PRODUCT OF</h4>
          <br />
          <a
            href="http://codesquad.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/CodeSquad-logo.jpg" width="150px" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
