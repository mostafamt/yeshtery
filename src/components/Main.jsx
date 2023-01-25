import React from "react";
import { IoStar } from "react-icons/io5";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

import Swiper from "./Swiper";
import cuid from "cuid";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      currentColor: 0,
    };
  }

  onAddHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  onRemoveHandler = () => {
    this.setState((prevState) => {
      if (prevState.counter > 1) {
        return {
          counter: prevState.counter - 1,
        };
      } else {
        return 0;
      }
    });
  };

  onChangeColorHandler = (colorIndex) => {
    if (colorIndex !== this.state.currentColor) {
      this.setState((prevState) => ({
        ...prevState,
        currentColor: colorIndex,
      }));
    }
  };

  addToCart = () => {
    const { product } = this.props;
    const { currentColor, counter } = this.state;
    this.props.addItemToCart({
      id: cuid(),
      title: product.title,
      url: product.colors[currentColor].imgs[0],
      quantity: counter,
      price: product.price,
      formatedPrice: product.actualPrice,
    });
    // this.setState((prevState) => ({
    //   ...prevState,
    //   counter: 1,
    // }));
  };

  render() {
    const { counter, currentColor } = this.state;
    const { product } = this.props;
    return (
      <main>
        <div className="container">
          <div className="product">
            <div className="product-show">
              <Swiper images={product.colors[currentColor].imgs} />
            </div>
            <div className="product-info">
              <div className="product-info-logo">
                <img src="/images/adidas-logo.png" alt="adidas" />
              </div>
              <p className="title">{product.title}</p>
              <p className="category">{product.gender}</p>
              <div className="rate">
                <div className="star">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <p className="rate-value">{product.rate} of 5</p>
                <p className="num-of-rates">{product.rates} Rates</p>
              </div>
              <div className="price">
                <p className="price-actual">
                  {product.actualPrice}
                  <span>LE</span>
                </p>
                <p className="price-virtual">{product.oldPrice} LE</p>
                <p className="price-discount">{product.discount}% Off</p>
              </div>
              <div className="hr"></div>
              <div className="size">
                <p>Size</p>
                <ul>
                  {product.sizes.map(({ id, size }) => (
                    <li key={id} className={size === "Large" ? "active" : null}>
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hr"></div>
              <div className="color">
                <p>Color</p>
                <ul>
                  {product.thumbnails.map(({ id, name, url }) => (
                    <li key={id}>
                      <Link onClick={() => this.onChangeColorHandler(id)}>
                        <img
                          src={url}
                          alt={name}
                          loading={"lazy"}
                          className={id === currentColor ? "active" : null}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hr"></div>
              <div className="quantity">
                <p>Quantity</p>
                <div className="controls">
                  <button onClick={() => this.onRemoveHandler()}>
                    <BiMinus />
                  </button>
                  <p>{counter}</p>
                  <button onClick={() => this.onAddHandler()}>
                    <BiPlus />
                  </button>
                </div>
                <div className="actions">
                  <button className="actions-cart" onClick={this.addToCart}>
                    Add To Cart
                  </button>
                  <button className="actions-store">Pickup From Store</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
