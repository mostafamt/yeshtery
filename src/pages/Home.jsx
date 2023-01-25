import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Main from "../components/Main";
import Products from "../components/Products";

class Home extends React.Component {
  render() {
    const { product, products, loading } = this.props;
    return (
      <>
        <Breadcrumbs />
        {loading ? (
          <div
            style={{
              height: "85rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="loader"></span>
          </div>
        ) : (
          <>
            {product && (
              <Main
                key={product.id}
                product={product}
                addItemToCart={(value) => this.props.addItemToCart(value)}
              />
            )}
            {products && (
              <Products
                products={products}
                getProduct={this.props.getProduct}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default Home;
