import React, { useEffect, useRef } from 'react'
import { useState  } from 'react'
import { getGrid } from '../../utils/startinggrid'
import './Pathfinding.css'
import { useParams } from '../../context/context'
import Navbar from '../Navbar/Navbar'
import Grid from '../Grid/Grid'


export default function Pathfinding() {





  return (
    <div>
      <Navbar></Navbar>
      <Grid></Grid>
      
      </div>
  )
}

// npm run dev