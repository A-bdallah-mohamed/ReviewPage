import logo from './logo.svg';
import './App.css';
import bannerbackground from './assets/bannerbackground.jpg'
import profileimage from './assets/profile.jpg'
import mac from './assets/mcdonalds.jpg'
import { HiMiniStar } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function App() {
  return (
<>
<div className='appcontainer'>


  <div className='app'>
  <div className='Mainbanner' style={{backgroundImage: `url(${bannerbackground})`}}>
    <div className='header'>
<div style={{fontSize:'50px',fontWeight:'bold'}}>Logo</div>
      <input placeholder='Search' className='searchfield'></input>
    <nav>
      <ul>
        <li>Home</li>
        <li>Collections</li>
        <li>Activity</li>
      </ul>
    </nav>
    <div className='profileimage' style={{backgroundImage: `url(${profileimage})`}}/>
    </div>

</div>
<div className='branddetails'>
  <div className='brandlogo'>
    <img src={mac}></img>
  </div>
  <div className='branddata'>
<div className='datapart'>
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
<div className='inforeviews'>
<div className='infocontainer'>
  <div className='infobox'>
    <di className='infoword'>Info</di>
    <div className='infoitself'>
      <div className='detailcontainer'>
      <div className='detaill'>
        <div style={{width:'40px',height:'40px',backgroundColor:'gray'}}></div>
        <div>www.website.com</div>
      </div>
      <div className='detaill'>
        <div style={{width:'40px',height:'40px',backgroundColor:'gray'}}></div>
        <div>0221458452</div>
      </div>
      <div className='detaill'>
        <div style={{width:'40px',height:'40px',backgroundColor:'gray'}}></div>
        <div>Address</div>
      </div>
      </div>
    </div>
  </div>
  <div className='infobox'>
    <di className='infoword'>Over All Ratings</di>
    <div className='infoitself'>
      <div className='detailcontainer'>
      <div className='detaill'>
        <div>5 stars</div>
     <div className='container'>
      <div className='skills five'></div>
     </div>
      </div>
      <div className='detaill'>
      <div>4 stars</div>
  <div className='container'>
    <div className='skills four'></div>
  </div>
      </div>
      <div className='detaill'>
      <div>3 stars</div>
    <div className='container'>
      <div className='skills three'></div>
    </div>
      </div>
      <div className='detaill'>
      <div>2 stars</div>
   <div className='container'>
    <div className='skills two'></div>
   </div>
      </div>
      <div className='detaill'>
      <div>1 stars</div>
    <div className='container'>
      <div className='skills one'></div>
    </div>
      </div>
      </div>
    </div>
  </div>
  <div className='infobox'>
    <di className='infoword'>Location</di>
    <div className='infoitself'>
      <div className='detailcontainer'>
      <div className='detaill'>
        <div style={{height:'200px'}}></div>    </div>
      </div>
    </div>
  </div>
  <div className='infobox'>
    <di className='infoword'>You Might Also Consider</di>
    <div className='infoitself'>
      <div className='detailcontainer'>
      <div className='detaill'>
        <div style={{height:'200px'}}></div>    </div>
      </div>
    </div>
  </div>
</div>
<div className='infocontainertwo'>
<div className='infowordtwo'>
  <div>Reviews</div>
<select>
  <option>Sort</option>
</select>
</div>




<div className='review'>
<div style={{display:'flex',justifyContent:'space-between',padding:'10px 20px'}}>{/*main user div => space between*/}



  <div style={{display:'flex'}}>{/*user nameimg and follow button and stars div => flex*/}


<div style={{display:'flex',flexDirection:'column'}}>{/*user nameimg and follow button div => flex column*/}

<div style={{display:'flex' , alignItems:'center',gap:'10px'}}>{/*user nameimg div => flex */}
<div style={{width:'100px',height:'100px',backgroundColor:'gray',borderRadius:"100px"}}></div>
<div style={{fontWeight:'bold',fontSize:'22px'}}>User name</div>
<button style={{cursor:'pointer',padding:'5px 20px',backgroundColor:'rgb(0, 182, 0)',border:'none',borderRadius:'8px',color:'white',fontWeight:'bold'}}>Follow</button>
</div>

<div style={{display:'flex',flexDirection:'column'}}>{/*stars div => flex column*/}

<div style={{fontWeight:'bold'}}>{/*branch address*/}
Branch address
</div>

<div style={{display:'flex',gap:'15px'}}>{/* stars => flex*/}
<div>{/*actual stars*/}
<HiMiniStar />    <HiMiniStar />    <HiMiniStar />    <HiMiniStar />
</div>
<div style={{color:'gray'}}>{/*date*/}
Feb 28,2022
</div>

</div>
</div>


</div>

  </div>
  


  <div>{/* brand image div*/}
    <img src={mac} style={{width:'100px'}}></img>
  </div>
  </div>


<div style={{fontSize:'14px',padding:'10px 15px'}}>{/* review text*/}
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</div>


<div style={{padding:'10px 20px',display:'flex',justifyContent:"space-between"}}>{/* like dislike accept decline => space between*/}

<div style={{display:'flex',gap:'15px'}}>{/* like dislike*/}
<BiLike />
<BiDislike />

</div>

<div style={{display:'flex',gap:'10px'}}>{/* accept decline buttons*/}
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px rgb(0, 182, 0)', color:'rgb(0, 182, 0)',cursor:'pointer'}}>Accept</button>
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px red', color:'red',cursor:'pointer'}}>Decline</button>
</div>

</div>


</div>


<div className='review'>
<div style={{display:'flex',justifyContent:'space-between',padding:'10px 20px'}}>{/*main user div => space between*/}



  <div style={{display:'flex'}}>{/*user nameimg and follow button and stars div => flex*/}


<div style={{display:'flex',flexDirection:'column'}}>{/*user nameimg and follow button div => flex column*/}

<div style={{display:'flex' , alignItems:'center',gap:'10px'}}>{/*user nameimg div => flex */}
<div style={{width:'100px',height:'100px',backgroundColor:'gray',borderRadius:"100px"}}></div>
<div style={{fontWeight:'bold',fontSize:'22px'}}>User name</div>
<button style={{cursor:'pointer',padding:'5px 20px',backgroundColor:'rgb(0, 182, 0)',border:'none',borderRadius:'8px',color:'white',fontWeight:'bold'}}>Follow</button>
</div>

<div style={{display:'flex',flexDirection:'column'}}>{/*stars div => flex column*/}

<div style={{fontWeight:'bold'}}>{/*branch address*/}
Branch address
</div>

<div style={{display:'flex',gap:'15px'}}>{/* stars => flex*/}
<div>{/*actual stars*/}
<HiMiniStar />    <HiMiniStar />    <HiMiniStar />    <HiMiniStar />
</div>
<div style={{color:'gray'}}>{/*date*/}
Feb 28,2022
</div>

</div>
</div>


</div>

  </div>
  


  <div>{/* brand image div*/}
    <img src={mac} style={{width:'100px'}}></img>
  </div>
  </div>


<div style={{fontSize:'14px',padding:'10px 15px'}}>{/* review text*/}
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</div>


<div style={{padding:'10px 20px',display:'flex',justifyContent:"space-between"}}>{/* like dislike accept decline => space between*/}

<div style={{display:'flex',gap:'15px'}}>{/* like dislike*/}
<BiLike />
<BiDislike />

</div>

<div style={{display:'flex',gap:'10px'}}>{/* accept decline buttons*/}
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px rgb(0, 182, 0)', color:'rgb(0, 182, 0)',cursor:'pointer'}}>Accept</button>
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px red', color:'red',cursor:'pointer'}}>Decline</button>
</div>

</div>


</div>


<div className='review'>
<div style={{display:'flex',justifyContent:'space-between',padding:'10px 20px'}}>{/*main user div => space between*/}



  <div style={{display:'flex'}}>{/*user nameimg and follow button and stars div => flex*/}


<div style={{display:'flex',flexDirection:'column'}}>{/*user nameimg and follow button div => flex column*/}

<div style={{display:'flex' , alignItems:'center',gap:'10px'}}>{/*user nameimg div => flex */}
<div style={{width:'100px',height:'100px',backgroundColor:'gray',borderRadius:"100px"}}></div>
<div style={{fontWeight:'bold',fontSize:'22px'}}>User name</div>
<button style={{cursor:'pointer',padding:'5px 20px',backgroundColor:'rgb(0, 182, 0)',border:'none',borderRadius:'8px',color:'white',fontWeight:'bold'}}>Follow</button>
</div>

<div style={{display:'flex',flexDirection:'column'}}>{/*stars div => flex column*/}

<div style={{fontWeight:'bold'}}>{/*branch address*/}
Branch address
</div>

<div style={{display:'flex',gap:'15px'}}>{/* stars => flex*/}
<div>{/*actual stars*/}
<HiMiniStar />    <HiMiniStar />    <HiMiniStar />    <HiMiniStar />
</div>
<div style={{color:'gray'}}>{/*date*/}
Feb 28,2022
</div>

</div>
</div>


</div>

  </div>
  


  <div>{/* brand image div*/}
    <img src={mac} style={{width:'100px'}}></img>
  </div>
  </div>


<div style={{fontSize:'14px',padding:'10px 15px'}}>{/* review text*/}
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</div>


<div style={{padding:'10px 20px',display:'flex',justifyContent:"space-between"}}>{/* like dislike accept decline => space between*/}

<div style={{display:'flex',gap:'15px'}}>{/* like dislike*/}
<BiLike />
<BiDislike />

</div>

<div style={{display:'flex',gap:'10px'}}>{/* accept decline buttons*/}
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px rgb(0, 182, 0)', color:'rgb(0, 182, 0)',cursor:'pointer'}}>Accept</button>
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px red', color:'red',cursor:'pointer'}}>Decline</button>
</div>

</div>


</div>


<div className='review'>
<div style={{display:'flex',justifyContent:'space-between',padding:'10px 20px'}}>{/*main user div => space between*/}



  <div style={{display:'flex'}}>{/*user nameimg and follow button and stars div => flex*/}


<div style={{display:'flex',flexDirection:'column'}}>{/*user nameimg and follow button div => flex column*/}

<div style={{display:'flex' , alignItems:'center',gap:'10px'}}>{/*user nameimg div => flex */}
<div style={{width:'100px',height:'100px',backgroundColor:'gray',borderRadius:"100px"}}></div>
<div style={{fontWeight:'bold',fontSize:'22px'}}>User name</div>
<button style={{cursor:'pointer',padding:'5px 20px',backgroundColor:'rgb(0, 182, 0)',border:'none',borderRadius:'8px',color:'white',fontWeight:'bold'}}>Follow</button>
</div>

<div style={{display:'flex',flexDirection:'column'}}>{/*stars div => flex column*/}

<div style={{fontWeight:'bold'}}>{/*branch address*/}
Branch address
</div>

<div style={{display:'flex',gap:'15px'}}>{/* stars => flex*/}
<div>{/*actual stars*/}
<HiMiniStar />    <HiMiniStar />    <HiMiniStar />    <HiMiniStar />
</div>
<div style={{color:'gray'}}>{/*date*/}
Feb 28,2022
</div>

</div>
</div>


</div>

  </div>
  


  <div>{/* brand image div*/}
    <img src={mac} style={{width:'100px'}}></img>
  </div>
  </div>


<div style={{fontSize:'14px',padding:'10px 15px'}}>{/* review text*/}
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</div>


<div style={{padding:'10px 20px',display:'flex',justifyContent:"space-between"}}>{/* like dislike accept decline => space between*/}

<div style={{display:'flex',gap:'15px'}}>{/* like dislike*/}
<BiLike />
<BiDislike />

</div>

<div style={{display:'flex',gap:'10px'}}>{/* accept decline buttons*/}
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px rgb(0, 182, 0)', color:'rgb(0, 182, 0)',cursor:'pointer'}}>Accept</button>
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px red', color:'red',cursor:'pointer'}}>Decline</button>
</div>

</div>


</div>


<div className='review'>
<div style={{display:'flex',justifyContent:'space-between',padding:'10px 20px'}}>{/*main user div => space between*/}



  <div style={{display:'flex'}}>{/*user nameimg and follow button and stars div => flex*/}


<div style={{display:'flex',flexDirection:'column'}}>{/*user nameimg and follow button div => flex column*/}

<div style={{display:'flex' , alignItems:'center',gap:'10px'}}>{/*user nameimg div => flex */}
<div style={{width:'100px',height:'100px',backgroundColor:'gray',borderRadius:"100px"}}></div>
<div style={{fontWeight:'bold',fontSize:'22px'}}>User name</div>
<button style={{cursor:'pointer',padding:'5px 20px',backgroundColor:'rgb(0, 182, 0)',border:'none',borderRadius:'8px',color:'white',fontWeight:'bold'}}>Follow</button>
</div>

<div style={{display:'flex',flexDirection:'column'}}>{/*stars div => flex column*/}

<div style={{fontWeight:'bold'}}>{/*branch address*/}
Branch address
</div>

<div style={{display:'flex',gap:'15px'}}>{/* stars => flex*/}
<div>{/*actual stars*/}
<HiMiniStar />    <HiMiniStar />    <HiMiniStar />    <HiMiniStar />
</div>
<div style={{color:'gray'}}>{/*date*/}
Feb 28,2022
</div>

</div>
</div>


</div>

  </div>
  


  <div>{/* brand image div*/}
    <img src={mac} style={{width:'100px'}}></img>
  </div>
  </div>


<div style={{fontSize:'14px',padding:'10px 15px'}}>{/* review text*/}
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</div>


<div style={{padding:'10px 20px',display:'flex',justifyContent:"space-between"}}>{/* like dislike accept decline => space between*/}

<div style={{display:'flex',gap:'15px'}}>{/* like dislike*/}
<BiLike />
<BiDislike />

</div>

<div style={{display:'flex',gap:'10px'}}>{/* accept decline buttons*/}
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px rgb(0, 182, 0)', color:'rgb(0, 182, 0)',cursor:'pointer'}}>Accept</button>
<button style={{borderRadius:'8px' ,padding:'5px 40px', backgroundColor:'rgba(255, 255, 255, 0)',border:'solid 1px red', color:'red',cursor:'pointer'}}>Decline</button>
</div>

</div>


</div>




</div>
<div></div>

</div>
</div>


</div>
</>
  );
}

export default App;
