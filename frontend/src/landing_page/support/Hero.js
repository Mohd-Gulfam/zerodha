import React from 'react'

function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-5 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='#'>Track ticket</a>
            </div>
            <div className='row p-5 '>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Search for an answer or browse help topic to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O'/><br/>
                    <a className='mx-1' href='#'>Track account opening</a>
                    <a href='#' className='mx-1'>Track segment activation</a>
                    <a href='#' className='mx-1'>intraday margins</a>
                   <a href='#' className='mx-1'> kite user manual</a>
                </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Feature</h1>
                    <ol className='mt-3'>
                        <li className='mb-2'><a href='#'>Current Takeover and Delisting - January 2024</a></li>
                        <li> <a href='#'>Latest Intraday leverange -MIS & CO</a></li>
                    </ol>
                    
                   
                </div>
            </div>
        </section>
    );
}

export default Hero;