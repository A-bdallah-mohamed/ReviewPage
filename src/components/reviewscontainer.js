import React from 'react'
import mac from '../assets/mcdonalds.jpg'
import { HiMiniStar } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Review from './review';
export default function Reviewscontainer() {
  return (
<div className='infocontainertwo'>
<div className='infowordtwo'>
  <div>Reviews</div>
<select>
  <option>Sort</option>
</select>
</div>
<Review />
<Review />
<Review />
<Review />
</div>
  )
}
