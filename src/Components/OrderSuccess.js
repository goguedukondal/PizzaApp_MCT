import React from 'react'
import {motion} from 'framer-motion'
import './Success.css'
import { useState,useEffect } from 'react'
function OrderSuccess() {
  const [move,setMove] = useState(false)
  useEffect(()=>{
setMove(!move)
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='vehicle'>
     
      <motion.div animate={{x:move?800:-2}}
      transition={{type:"tween",duration:10}}
      >
        <img src='https://th.bing.com/th/id/OIP.gtjqK0IudFgfF7Jrirg5GAHaHQ?w=197&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt="bike"/>
      </motion.div>
    </div>
  )
}

export default OrderSuccess