import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imgURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo}>Try Demo<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More<i class="fa fa-arrow-circle-right" ></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="Google Play" />
            </a>

            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
