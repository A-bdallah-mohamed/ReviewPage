import React from 'react'
import Reviewsreacts from './reviewsreacts'
import Profileratings from './profileratings'
import Mycollections from './Mycollections'
import Photos from './photos'
import Wantstovisit from './wantstovisit'
export default function Profileinfocintainer() {
  return (

<div className='infocontainer'>
<Reviewsreacts />
<Profileratings />
<Mycollections />
<Photos />
<Wantstovisit />
</div>
  )
}
