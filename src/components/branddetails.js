import React from 'react'
import mac from '../assets/mcdonalds.jpg'
import { HiMiniStar } from "react-icons/hi2";

export default function Branddetails() {
  return (
<div className='branddetails'>
  <div className='brandlogo'>
    <img src={mac}></img>
  </div>
  <div className='branddata'>
<div className='datapart' style={{color:'white'}}>
  <div>
  <div style={{fontSize:'30px',fontWeight:'bold'}}>McDonald's</div>

  <div>Text</div>
  </div>
</div>
<div className='datapart'>
  <div className='reveiws'>
    <div style={{color:'black'}}>1321 Review</div>
    <div style={{color:'black',fontSize:'35px'}}><HiMiniStar />
    <HiMiniStar />
    <HiMiniStar />
    <HiMiniStar />
    <HiMiniStar />
</div>
  </div >
  <div className='buttons'>
    <button style={{backgroundColor: 'white',color:'rgb(0, 182, 0)'}}>Write review</button>
    <button style={{backgroundColor: 'rgb(0, 182, 0)',color:'white'}}>Save</button>
  </div>
</div>
  </div>
</div>
  )
}
