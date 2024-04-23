import React from 'react'
import mac from './assets/mcdonalds.jpg'
import { useState } from 'react';
import Footer from './components/footer';
import Addreviewform from './components/addreviewform';
export default function Reviewpage() {

  return (
    <div className='appcontainer'>
  <div className='app' style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'100px'}}>
   <Addreviewform />
   <Footer />
    </div>
    </div>
  )
}
