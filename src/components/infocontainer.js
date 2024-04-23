import React from 'react'
import Restaurantinfo from './restaurantinfo.js'
import Restaurantratings from './restaurantratings.js'
import Restaurantlocation from './Restaurantlocation.js'
import Youmighalsoconisder from './youmighalsoconisder.js'
export default function nfocontainer() {
  return (
    <>

<div className='infocontainer'>
<Restaurantinfo />
<Restaurantratings />
<Restaurantlocation />
<Youmighalsoconisder />
</div>
</>
  )
}
