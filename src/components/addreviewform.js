import React from 'react'
import { useState } from 'react';
import mac from '../assets/mcdonalds.jpg'
export default function Addreviewform() {
    const [uploadedimages,setuploadedimages] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log("File uploaded:", file);
        const updaetdarray = [...uploadedimages, event.target.result]
        setuploadedimages(updaetdarray)
        console.log("uploaded files are : ", uploadedimages);
      
            };
            reader.readAsDataURL(file);
          }
   
      }
  return (
    <body>
    <div style={{height:'auto',overflowY:'hidden'}}>
        <header>
        <div className="logo">
            LOGO 
        </div>
        <div className="button">
            <button className="back-button">
                Back
            </button>
        </div>
        </header>
        <div style={{display:'flex',gap:'10px'}}>
            <img src={mac} alt="Restaurant Logo" className="restaurant-logo" />
            <div className="restaurant-name">Mcdonald's</div>
        </div>
        
       
        <form className="review-form">
            <textarea className="review-text" placeholder="Write your review (at least 150 words)"></textarea>
          
        </form>
        <div className='uploadedimagescontainer'>
        {uploadedimages.map((image,indx)=> (
            <div  key={indx} className='imgcontainer'>
                <img src={image}></img>
                </div>
            ))}
            </div>
        <div className="button-3">
            <button className="Post-button">
                Post
            </button>
            
        </div>
        <div className="button-4">
            <button className="add-button">
            <label htmlFor="file-input" className="upload-btn" style={{cursor:'pointer'}}>Add Photo</label>
                <input type='file' style={{display:'none'}} id='file-input' onChange={(e)=>handleFileUpload(e)}/>
            </button>
           
        </div>
    
        
    </div>
    </body>
  )
}
