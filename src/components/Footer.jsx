import React from "react";

import { TbSend } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="content">
            <div className="content-left">
              <img src="/images/brand-logo-yellow.svg" alt="brand" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                est non eaque adipisci quaerat tempora temporibus fugit dolore
                iure itaque.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                rem eaque ex quaerat. Eos ea quas ut doloribus quia ad eligendi
                esse eaque itaque ipsam beatae reprehenderit rem, illo
                assumenda, iste vel exercitationem dolorum ratione sed est unde
                recusandae nobis? Quam illum incidunt deleniti corrupti, sunt
                vero beatae ratione error?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                doloribus assumenda nam cumque possimus similique.
              </p>
            </div>
            <div className="vl"></div>
            <div className="content-right">
              <p>Subscibe to our newsletter</p>
              <form className="form">
                <input type="text" placeholder="Enter Your Mail" />
                <button>
                  <span>Subscribe</span>
                  <FiSend />
                </button>
              </form>
              <div className="links">
                <ul className="links-left">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/track-order">Track Order</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/sell-with-us">Sell With Us</Link>
                  </li>
                  <li>
                    <Link to="/shipping">Shipping And Returns</Link>
                  </li>
                </ul>
                <div className="vl"></div>
                <ul className="links-right">
                  <li>
                    <a href="#">
                      <img src="/images/social/facebook.png" alt="facebook" />
                      <p>/Yeshtery</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/social/linkedin.png" alt="facebook" />
                      <p>/Yeshtery</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/social/instagram.png" alt="facebook" />
                      <p>/Yeshtery</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/social/twitter.png" alt="facebook" />
                      <p>/Yeshtery</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hr"></div>
        <div className="tail">
          <div className="copyrights">
            &copy; 2021 yeshtery, all rights reserved
          </div>
          <div className="payments">
            <img src="/images/payment/cash.png" alt="cash" />
            <img src="/images/payment/visa.png" alt="visa" />
            <img src="/images/payment/mastercard.png" alt="mastercard" />
          </div>
          <div className="powered">
            <p>Powered By </p>
            <img src="/images/nas_nav.svg" alt="nas_nav" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
