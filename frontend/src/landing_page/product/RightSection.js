import React from "react";

function RightSection({
  imgURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h3>{productName}</h3>
          <p>{productDescription}</p>

          <a href={learnMore}>
            Learn more{" "}
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-6">
          <img src={imgURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
