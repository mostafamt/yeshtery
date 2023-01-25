import React from "react";

import { TfiClose } from "react-icons/tfi";

const Cart = ({ cartOpened, toggleCartHandler, cart, removeItemFromCard }) => {
  console.log(cart);

  const removeItem = (id) => {
    console.log(id);
    // id
    removeItemFromCard(id);
  };

  return (
    <>
      {cartOpened ? (
        <div className="backdrop" onClick={() => toggleCartHandler()}></div>
      ) : null}
      <div className={["cart", cartOpened ? "active" : ""].join(" ")}>
        <div className="cart-content">
          <button
            className="cart-content--close-button"
            onClick={() => toggleCartHandler()}
          >
            <TfiClose />
          </button>

          <p className="cart-title">My Cart</p>

          {cart.length > 0 && (
            <>
              <p className="cart-summary">Cart Summary</p>
              <ul className="list">
                {cart.map((item) => (
                  <li className="item" key={item.id}>
                    <img src={item.url} alt="item 1" className="item-photo" />
                    <div className="item-info">
                      <p className="item-info--title">{item.title}</p>
                      <div className="item-details">
                        <div className="item-price">
                          <p className="item-price-quantity">
                            Quanitity: {item.quantity}
                          </p>
                          <p className="item-price-value">
                            {item.formatedPrice} LE
                          </p>
                        </div>
                        <div className="item-remove">
                          <button onClick={() => removeItem(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="total">Total: 19,999 LE</p>
              <div className="actions">
                <button className="actions-review">Review Cart</button>
                <button className="actions-checkout">Complete Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
