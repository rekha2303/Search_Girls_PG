import React, { useState, useEffect  } from 'react';


const SecondaryHeader = () => {


  return (
    <div className="SecHeader" style={{backgroundColor: 'white'}}>
     <nav>
        
          <ul className='header-ul'>
            <li><a href="/">Home</a></li>
            <li><a href="#features">Feature</a></li>
            <li><a href="#about_us">About</a></li>
            <li><a href="#contact_us">Contact</a></li>
          </ul>
       
      </nav>

    </div>
  );
};
export default SecondaryHeader;
