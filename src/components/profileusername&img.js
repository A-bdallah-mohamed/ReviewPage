import React from 'react'
import { HiMiniStar } from "react-icons/hi2";
import profileimage from '../assets/profile.jpg'

export default function Profileusernameimg() {
  return (

<div className='branddetails'>
  <div className='brandlogo'>
    <img src={profileimage}></img>
  </div>
  <div className='branddata'>
<div className='datapart' style={{color:'white'}}>
  <div>
  <div style={{fontSize:'30px',fontWeight:'bold'}}></div>

  <div></div>
  </div>
</div>
<div className='datapart'>
  <div className='reveiws'>
    <div style={{color:'black',fontSize:'30px',fontWeight:'bold'}}>User Profile</div>
    <div style={{color:'black',fontSize:'15px'}}>1000 Followers
</div>
  </div >
  <div className='buttons'>
    <button style={{backgroundColor: 'white',color:'rgb(0, 182, 0)'}}>Following</button>
    <button style={{backgroundColor: 'rgb(0, 182, 0)',color:'white'}}>Edit profile</button>
  </div>
</div>
  </div>
</div>
  )
}
