import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row text-muted text-center">
        <p className="mt-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <h3 className="mt-5">The Zerodha Universe</h3>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5 p-3">
          <img src="media/zerodhaFundhouse.png"style={{width:"200px"}} />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  mt-5 p-3">
          <img src="media/sensibullLogo.svg" style={{width:"200px"}}  />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more. .
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img src="media/streakLogo.png" style={{width:"200px"}} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding..
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/smallcaseLogo.png"style={{width:"200px"}}  />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/dittoLogo.png"style={{width:"200px"}}  />
          <p className="text-small text-muted mt-3 ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/tijori.svg" style={{width:"200px"}}  />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className='p-3 btn btn-primary fs-5 mt-5 mb-5' style={{ width:"20%",  height:"30%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
