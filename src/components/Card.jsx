import React from "react";
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";
import CardHeader from "./CardHeader";

const Card = ({ image, title, getProduct }) => {
  const onClickCardHandler = () => {
    getProduct();
  };

  return (
    <li className="card">
      <Link onClick={onClickCardHandler}>
        <CardHeader image={image} />
        <CardDetails title={title} />
      </Link>
    </li>
  );
};

export default Card;
