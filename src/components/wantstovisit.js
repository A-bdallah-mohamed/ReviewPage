import React from 'react'
import mac from '../assets/mcdonalds.jpg'
export default function Wantstovisit() {
  return (

    <div className='infobox'>
    <di className='infoword'>Wants to visit</di>
    <div className='infoitself'>
      <div className='detailcontainer'>
      <div className='detaill'>
        <div style={{height:'200px'}}></div> 
        <div className='collection'>
<img src={mac} />
<div className='wantstovisittext'>
    <div>text</div>

</div>
        </div>
        <div className='collection'>

<img src={mac} />
        <div className='wantstovisittext'>
    <div>text</div>
        </div>
</div>
<div className='collection'>

<img src={mac} />
<div className='wantstovisittext'>
    <div>text</div>

</div>
</div>
           </div>
      </div>
    </div>
  </div>
  )
}
