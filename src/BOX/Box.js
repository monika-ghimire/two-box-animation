import '../App.css'

import React, { useState } from 'react';
export default function Box() {
  
  let [display,setDisplay]=useState(true)

  const slideBox=()=>{
    let Rbox=document.getElementById('red-box');
    let Gbox=document.getElementById('greenBox');
    let displayNone=display
    if(displayNone==true)
    {
      displayNone="true"
      Rbox.style.left="10%";
      Gbox.style.right="2%";
      Gbox.style.display="block";
      console.log('in')
    }

    if(displayNone==false)
    {  
      displayNone=false
      Rbox.style.left="1%";
      Gbox.style.right="0%";
      Gbox.style.display="none";
      console.log('out')
    }
    setDisplay(!display)

  }

  return (
    <>
    <div className='box-holder'>
    
    <div className='col-md-8 red-box' id='red-box'></div>
    <div className='col-md-4 green-box' id='greenBox'></div>
    <div>
    <button className='main-btn' onClick={slideBox}>click</button>
    </div>
  
     
      

      </div></>
  )
}
