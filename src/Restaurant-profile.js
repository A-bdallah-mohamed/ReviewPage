import logo from './logo.svg';
import './App.css';
import bannerbackground from './assets/bannerbackground.jpg'
import profileimage from './assets/profile.jpg'
import mac from './assets/mcdonalds.jpg'
import { HiMiniStar } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Navbar from './components/Navbar';
import Branddetails from './components/branddetails';
import Infocontainer from './components/infocontainer';
import Reviewscontainer from './components/reviewscontainer';
import React from 'react';

export default function Restaurantprofile() {
  return (
<div className='appcontainer'>
  <div className='app'>
  <div className='Mainbanner' style={{backgroundImage: `url(${bannerbackground})`}}>
<Navbar />
</div>
  <Branddetails />
<div className='inforeviews'>
      <Infocontainer />
      <Reviewscontainer />
</div>
</div>
</div>
  )
}
