import React, { Fragment } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="footContainer flex-row">
        <div className="footLeft flex-col">
          <div className="vitLogo">
            <Link to="/" className="logoVit">
              <span className="Vbig">V</span>
              <span className="Xbig">T</span>
            </Link>
          </div>
          <div className="flex-row">
            <Link to="/" className="logoTxt">
              VIT
            </Link>
            <Link to="/" className="X">
              {/* X */}
            </Link>
            <Link to="/" className="logoTxt">
              rade
            </Link>
          </div>
        </div>
        <div className="footCenter">
          <div className="footList">
            <h1>Top Categories</h1>
            <ul>
              <li>
                <Link>Bicycle</Link>
              </li>
              <li>
                <Link>Mobiles</Link>
              </li>
              <li>
                <Link>Bicycle</Link>
              </li>
              <li>
                <Link>Bicycle</Link>
              </li>
            </ul>
          </div>
          <div className="footList">
            <h1>Top Links</h1>
            <ul>
              <li>
                <Link>Bicycle</Link>
              </li>
              <li>
                <Link>Mobiles</Link>
              </li>
              <li>
                <Link>Bicycle</Link>
              </li>
              <li>
                <Link>Bicycle</Link>
              </li>
            </ul>
          </div>
          <div className="footList">
            <h1>Policies</h1>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footRight">
          <h1>Meet the Team</h1>
          <ul>
            <li>
              <Link>Divy</Link>
              <Link>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-github"></i>
              </Link>
            </li>
            <li>
              <Link>Tanmay</Link>
              <Link>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-github"></i>
              </Link>
            </li>
            <li>
              <Link>Devansh</Link>
              <Link>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-github"></i>
              </Link>
            </li>
            <li>
              <Link>Yuvraj</Link>
              <Link>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-github"></i>
              </Link>
            </li>
            <li>
              <Link>Madhuram</Link>
              <Link>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i class="fa-brands fa-github"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
