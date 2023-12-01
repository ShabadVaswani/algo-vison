import React, { useState } from 'react'
import './Navbar.css'
import { useParams } from '../../context/context'


export default function Navbar() {

  // const [algo,setalgo] = useState('')
  const {mode,setmode,algo,setalgo,setres,setrun}=useParams()

  

  return (
    <div className='navbar'>
      <div className='container'>
       <button type="button" className={['btn' ,'btn-primary', mode=='setstart'? 'selected' : ''].join(' ')} onClick={()=>{
        if(mode == 'setstart') setmode(null)
        else {setmode('setstart')}
       }}>
       From <i className="bi bi-geo-alt"></i>
       </button>
       <button type="button" className={['btn' ,'btn-primary', mode=='settarget'? 'selected' : ''].join(' ')} onClick={()=>{
        if(mode == 'settarget') setmode(null)
        else {setmode('settarget')}
       }}>
       Goal <i className="bi bi-geo"></i>
       </button>
       
       <button type="button" className="btn btn-primary" onClick={()=>{setres((old)=>{ return !old})}}>
       Reset <i className="bi bi-arrow-counterclockwise"></i> 
       </button>
       <button type="button" className="btn btn-primary btnstr" onClick={()=>{setrun((old)=>{return !old})}}>
       Start<i className="bi bi-caret-right"></i>
       </button>
       <div>
       <select className="form-select" aria-label="Default select example"  value={algo} onChange={(e)=>{
        setalgo(e.target.value)
       }}>
       <option value=''>Choose your algorithm</option>
       <option value="BFS">BFS</option>
</select>
       </div>
      </div>
    </div>
  )
}