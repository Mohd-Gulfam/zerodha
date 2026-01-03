import React from 'react'

function Brokerage() {
    return (  
        <div className='container'>
        <div className='row text-center mt-5 mb-5 p-5 border-top'>
            <div className='col-8'>
                <a href='#' style={{textDecoration:"none"}}><h3 className='fs-5'> brokerage Calculater</h3> </a>
                <ul style={{ textAlign:"left" , lineHeight: "2.5rem" , fontSize:"12px"}}>
                    <li>call & Trade ans RMS auto-squareoff. Additional charges of ₹50 + GST per order</li>
                    <li>Digital contract notes will be sent via e-mail</li>
                    <li>Physical copies of contract notes ,if required , shall be chaerged ₹ 20  per contract note .Courier charges apply. </li>
                    <li>For NRI account (none-PIS), 0.5% or ₹ 100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS) , 0.5% or ₹200 per excuted order for equity  (whichever is lower) </li>
                    <li>if the account is in debit balance , any order placed will be charged ₹40 per excuted order instead of ₹20 excuted order</li>
                </ul>
            </div>
             <div className='col-4'>
                <a href='#' style={{textDecoration:"none"}}><h3 className='fs-5'> List of charges</h3> </a>
             </div>
            
        </div>
        
       </div>
    );
}

export default Brokerage;