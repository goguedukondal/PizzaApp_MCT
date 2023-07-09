// import React from 'react'
import {getpizzas} from '../Actionns'
function PizzasActionCreator(data) {
  return {
   type:getpizzas,
   payload:data
  }
}

export default PizzasActionCreator