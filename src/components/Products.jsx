import React from "react";
import Card from "./Card";

class Products extends React.Component {
  render() {
    const { getProduct, products } = this.props;
    return (
      <section className="products">
        <div className="container">
          <div className="products-text">
            <p className="products-title">Similar Prodcuts</p>
            <p className="products-description">
              You may like these products also
            </p>
          </div>
          <ul className="list">
            {products.map((product, idx) => (
              <Card
                key={idx}
                image={product.thumbnails[0].url}
                title={product.title}
                getProduct={() => getProduct(product.id)}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Products;
