import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./container/Layout";
import { elements, paths } from "./constants";
import {
  getInitialProduct,
  getInitialProducts,
  getProduct,
  getProducts,
} from "./services/api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOpened: false,
      product: null,
      products: null,
      loadingProduct: false,
      cart: [],
      totalItems: 0,
    };
  }

  async componentDidMount() {
    await this.initializeProduct();
  }

  initializeProduct = async () => {
    this.setState((prevState) => ({ ...prevState, loadingProduct: true }));
    const product = await getInitialProduct();
    const products = await getInitialProducts();
    this.setState((prevState) => ({
      ...prevState,
      product: product,
      products: products,
    }));
    this.setState((prevState) => ({ ...prevState, loadingProduct: false }));
  };

  updateProduct = async (id) => {
    this.setState((prevState) => ({ ...prevState, loadingProduct: true }));
    const product = await getProduct(id);
    const products = await getProducts(id);
    this.setState((prevState) => ({
      ...prevState,
      product: product,
      products: products,
    }));
    this.setState((prevState) => ({ ...prevState, loadingProduct: false }));
  };

  toggleCartHandler = () => {
    this.setState({
      cartOpened: !this.state.cartOpened,
    });
  };

  addItemToCart = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      cart: [...prevState.cart, item],
      totalItems: prevState.totalItems + item.quantity,
    }));
  };

  removeItemFromCard = (itemId) => {
    const item = this.state.cart.filter((el) => el.id === itemId)[0];
    this.setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.filter((item) => item.id !== itemId),
      totalItems: prevState.totalItems - item.quantity,
    }));
  };

  returnLayout = (el) => {
    return (
      <Layout
        cartOpened={this.state.cartOpened}
        toggleCartHandler={this.toggleCartHandler}
        cart={this.state.cart}
        removeItemFromCard={this.removeItemFromCard}
        totalItems={this.state.totalItems}
      >
        {el}
      </Layout>
    );
  };

  render() {
    const { product, products, loadingProduct } = this.state;
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={this.returnLayout(
              <Home
                toggleCartHandler={this.toggleCartHandler}
                getProduct={this.updateProduct}
                product={product}
                products={products}
                loading={loadingProduct}
                addItemToCart={(value) => this.addItemToCart(value)}
              />
            )}
          />
          {paths.map((path, idx) => (
            <Route
              key={idx}
              path={path}
              element={this.returnLayout(elements[idx])}
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
