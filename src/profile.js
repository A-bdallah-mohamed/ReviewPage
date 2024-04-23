import bannerbackground from './assets/bannerbackground.jpg'
import Navbar from './components/Navbar';
import Profileusernameimg from './components/profileusername&img';
import Profileinfocintainer from './components/profileinfocintainer';
import Profilereviewscontainer from './components/profilereviewscontainer';
import React from 'react';

export default function Profile() {
  return (
<div className='appcontainer'>
  <div className='app'>
  <div className='Mainbanner' style={{backgroundImage: `url(${bannerbackground})`}}>
<Navbar />
</div>
  <Profileusernameimg />
<div className='inforeviews'>
      <Profileinfocintainer />
      <Profilereviewscontainer />
</div>
</div>
</div>
  )
}
