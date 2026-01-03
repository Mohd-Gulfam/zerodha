import React from 'react'

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbitable price</h1>
                    <p>We pioneered the concept of broking and pricing transparency in india . Flat fees and no hidden charges</p>
                    <a href='b' className='mx-5'style={{textDecoration:"none"}}>Try kite demo<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-2  border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p>intraday and f&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;