import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { SlArrowLeft, SlArrowRight, SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="container">
        <div className="topbar-content">
          <div className="topbar-content-logo">
            <RiMenu2Line className="topbar-content-logo-icon" />
            <img src="/images/yeshtery-logo.png" alt="logo" />
          </div>
          <div className="topbar-content-offer">
            <SlArrowLeft />
            <p>
              valentine's day offers! Buy Two Get One Free{" "}
              <Link to="/shop-now">Shop Now</Link>
            </p>
            <SlArrowRight />
          </div>
          <ul className="list">
            <li className="list-item">
              <Link to="/contact-us">
                <FiPhoneCall />
                <p>Contact Us</p>
              </Link>
            </li>
            <li>
              <Link to="/track-order">
                <AiOutlineShoppingCart />
                <p>Track Order</p>
              </Link>
            </li>
            <li>
              <Link to="/find-store">
                <SlLocationPin />
                <p>Find A Store</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
