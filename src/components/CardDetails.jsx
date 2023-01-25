import React from "react";
import { IoStar } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";

class CardDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <div className="card-details">
        <p className="title">{title}</p>
        <div className="card-info">
          <div className="card-info-details-price">
            <p className="actual">9,999 LE</p>
            <div className="card-info-details-price-discount">
              <p className="price">9,999 LE</p>
              <p className="percentage">50%</p>
            </div>
          </div>
          <div className="card-info-details-category">
            <img src="/images/adidas-logo.png" alt="adidas" />
          </div>
        </div>
        <div className="card-rate">
          <div className="star">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <AiOutlineStar />
          </div>
          <p>4.2 of 5</p>
        </div>
        <div className="card-pickup">
          <p>Pickup From Genena Mall</p>
        </div>
      </div>
    );
  }
}

export default CardDetails;
