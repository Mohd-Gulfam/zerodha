import React from 'react'
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='homeHero' className='mb-5'/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stock , derivatives, mutual funds, and more  </p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{ width:"30%" , margin: "0 auto"}}>Signup</button>
            </div>
        </div>
     );
}

export default Hero;