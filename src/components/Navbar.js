import React from 'react'
import profileimage from '../assets/profile.jpg'
export default function Navbar() {
  return (
    <div className='header'>
    <div style={{fontSize:'50px',fontWeight:'bold'}}>Logo</div>
          <input placeholder='Search' className='searchfield'></input>
        <nav>
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Activity</li>
          </ul>
        </nav>
        <div className='profileimage' style={{backgroundImage: `url(${profileimage})`}}/>
        </div>
  )
}
