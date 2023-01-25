import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header container">
        <form className="header-search">
          <button type="submit">
            <AiOutlineSearch />
          </button>

          <input placeholder="Search" />
        </form>
        <Link to="/" className="header-img">
          <img src="/images/adidas-logo.png" alt="adidas" />
        </Link>
        <ul>
          <li>
            <Link onClick={this.props.toggleCartHandler}>
              <BsMinecartLoaded />
              <p>Cart</p>
              <div className="counter">{this.props.totalItems}</div>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <IoIosHeartEmpty />
              <p>Whishlist</p>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <IoPersonOutline />
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
