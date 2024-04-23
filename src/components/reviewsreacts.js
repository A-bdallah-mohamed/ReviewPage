import React from 'react'

import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function Reviewsreacts() {
  return (
    <div className='infobox'>
    <di className='infoword'>Reviews Reacts</di>
    <div className='infoitself'>
      <div className='reacts'>
      <div className='react'>
           <BiLike />
        <div style={{color:'black'}}>50</div>
      </div>
      <div className='react'>
          <BiDislike />
        <div style={{color:'black'}}>50</div>
      </div>
      <div className='react'>
      <FaHeart />
        <div style={{color:'black'}}>50</div>
      </div>
      </div>
    </div>
  </div>
  )
}
