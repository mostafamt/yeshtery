import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Cart
          cartOpened={this.props.cartOpened}
          toggleCartHandler={this.props.toggleCartHandler}
          cart={this.props.cart}
          removeItemFromCard={this.props.removeItemFromCard}
        />
        <Topbar />
        <Header
          toggleCartHandler={this.props.toggleCartHandler}
          totalItems={this.props.totalItems}
        />
        <Navbar />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Layout;
