import React from 'react'
import bannerbackground from '../assets/bannerbackground.jpg'
export default function Footer() {
  return (
    <div className='footer'>
  <div className='Mainbanner' style={{backgroundImage: `url(${bannerbackground})`}}></div>
  <div className='footercontent'>
  <div style={{fontSize:'50px',fontWeight:'bold',color:'white'}}>Logo</div>
  <div style={{fontSize:'50px',fontWeight:'bold',color:'white'}}>Follow us</div>
  <ul>
    <li>About Us</li>
    <li>Terms & Conditions</li>
    <li>Contact Us</li>
  </ul>
  </div>
    </div>
  )
}
