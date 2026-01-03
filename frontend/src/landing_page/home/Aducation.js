import React from 'react'
function Aducation() {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 '>
                    <img src='media/education.svg' alt='education' style={{width:"70%"}}/>
                </div>
                <div className='col-6 mb-5'>
                    <h1 className='mb-3 fs-2'>Free and open market education </h1>
                    <p>vasity ,the larger online stocke education book in the world convering evrything from the basic to advanced trading.</p>
                    <a href='a'  style={{textDecoration:"none"}}>versity <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                    <p>trading Q&A , the most active trading and investments core market related queries.</p>
                    <a href='a'  style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>

     );
}

export default Aducation;