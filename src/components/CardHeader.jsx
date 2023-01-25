import React from "react";

const CardHeader = ({ image }) => {
  return (
    <div className="card-header">
      <img src={image} alt="jacket" />
    </div>
  );
};

export default CardHeader;
