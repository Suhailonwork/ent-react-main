import React from 'react';
import { Link } from 'react-router-dom';  
import './thnk.css';

export default function Thanks() {
  return (
    <div>
     <div className='thnkyu'>
     <div className='content'>
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h2 style={{color: "#0F995F"}}>Thank You for Reaching Out!</h2>
            <p>Your consultation request has been received.</p>
            <p>Our team will get in touch with you shortly to assist with your ENT concerns.</p>
          </div>
          <div className="footer-like pb-4">
            <p>Need immediate assistance? Call us at <strong>+91 98711 50032</strong></p>
   
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}
