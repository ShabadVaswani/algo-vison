import React, { useEffect, useRef } from 'react'
import './homeFull.css'
import NavOne from '../NavOne/NavOne'

export default function HomeFull() {
  return (
    <div>
      <NavOne></NavOne>
      <h2 className="h2">ALGORITHM VISUALIZER</h2>
    <form id="form" action="/pathfinder">

      <button id="submit" type="submit" placeholder="hello">Pathfinder</button>
      <br></br>
    </form>    
    <a  href="http://192.168.1.2:5500/">

      <button id="submit" type="submit" placeholder="hanoi" >Tower of Hanoi</button><br></br>
      </a>    
      </div>
  )
}

// npm run dev