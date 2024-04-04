import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = ()=>{
return(
    <div className="d-flex flex-row align-items-center p-3 justify-content-between" >
        <div className="d-flex flex-row flex-wrap justify-content-between p-3 h-100">
    <div className="w-50 d-flex flex-column align-items-center justify-content-center">
          <div>
            <p>About Magicbricks
Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.</p>
          </div>
        </div>
        <div className="w-50 d-flex flex-column align-items-center justify-content-center">
       
    
    <div className="d-flex flex-row align-items-center">
        <FacebookIcon className="white pointer me-2" />
        <InstagramIcon className="white pointer me-2"/>
        <LinkedInIcon className="white pointer me-2"/>
    </div>
    </div>
</div>
</div>       

)

}

export default Footer;