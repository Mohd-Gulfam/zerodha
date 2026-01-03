import React from 'react'

import Navbar from '../../Navbar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Aducation from './Aducation';
import OpenAccount from '../../OpenAccount';
import Footer from '../../Footer';

function HomePage() {
    return ( 
        <>
          
        
          <Hero/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Aducation/>
          <OpenAccount/>
          

        
        </>
     );
}

export default HomePage;