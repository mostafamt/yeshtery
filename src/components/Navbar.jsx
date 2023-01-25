import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/unisex">Unisex</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/best-sellers">Best Sellers</Link>
          </li>
          <li>
            <Link to="/new-arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link to="/offers" className="active">
              Offers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
