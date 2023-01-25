import React from "react";

const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <a href="#">Men</a>
            <span> / </span>
          </li>
          <li>
            <a href="#">Clothing</a>
            <span> / </span>
          </li>
          <li>
            <a href="#">Tops</a>
            <span> / </span>
          </li>
          <li>
            <a href="#">Adidas</a>
            <span> / </span>
          </li>
          <li>
            <a href="#">Adidas Black T-Shirt</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumbs;
