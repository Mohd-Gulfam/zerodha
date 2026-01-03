import React from 'react'
function Awards() {
    return (  
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='large'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stoke broker in india </h1>
                    <p className='mb-5'>2+ million Zerodha clints contribute to over 15% of all stock value in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and option </p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stoke and IPOs</p>
                                </li>
                                <li>
                                    <p>DIrect mutual fund</p>
                                </li>
                                <li>
                                    <p>Bonds and govermente</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width: "90%"}} alt='presslogo'/>
                </div>
            </div>
        </div>
    );
}

export default Awards

