import React, { useState } from 'react'
import './NavTwo.css'
import { useParams } from '../../context/context'
import algo from '../../images/algo.svg'



export default function NavOne() {

  // const [algo,setalgo] = useState('')
  const {mode,setmode,algo,setalgo,setres,setrun}=useParams()

  

  return (
    <div className='navone'>
      
  <script src="https://kit.fontawesome.com/75b046ffb0.js" crossorigin="anonymous"></script>
<header id="header"> 
    <img src={algo} alt=""/>
    <nav id="nav">
      <ul src="#Features" className="nav-link eoh">More</ul>
      <ul src="#How" className="nav-link eoh">How It Works</ul>
      <ul src="#Pricing" className="nav-link eoh">Contact Us</ul>
    </nav>

    
  </header>
    </div>
  )
}