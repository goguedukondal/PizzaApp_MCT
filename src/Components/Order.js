import React from 'react'
import {Box,Text,Heading,Button} from '@chakra-ui/react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Order.css'
function Order() {
  const navigate = useNavigate()
  const inputvalues=useRef({
    email:null,
    phone:null,
    slices:null,
  })
  const Orderfn=()=>{
  
    navigate('/ordersuccess')
   
  }
  return (
    <Box
    backgroundImage="url('https://th.bing.com/th/id/OIP.rE4DwlvG3jQwh08gFiSDWAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundAttachment="fixed"
    backgroundSize="100% 100%"
    width="85vw"
    height="100vh"
    paddingTop="50px"
    paddingLeft="50px"
  > <Box className='headerpart'>
    <Heading fontSize='25px'>WELCOME TO ITALIAN PIZZA!</Heading>
    <Text>We Deliver Pizza in 40 minutes max. If not - Pizza's on us!</Text>
  </Box>
    <Box className='form'>
      <form>
        <br/>
      <label>Email</label> <br/>
      <input type='emali' ref={inputvalues.email}/><br/><br/>
      <label>Phone</label><br/>
      <input type='text' placeholder='area' style={{width:"5vw"}} ref={inputvalues.phone}/> &nbsp; &nbsp;&nbsp;&nbsp;
      <input type='text' placeholder='local' style={{width:"5vw"}} ref={inputvalues.phone}/>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='text' placeholder='loacal' style={{width:"5vw"}} ref={inputvalues.phone}/><br/><br/>
      <label >Number of Slices</label><br/>
      <input type='text' ref={inputvalues.slices}/>
      <br/>
      <label>Pizza Size</label><br/>
      <input type="radio" name='inch'/> &nbsp;
    <span>8-Inch</span>&nbsp;&nbsp;&nbsp;
    <input type="radio"  name='inch'/> &nbsp;
    <span>10-Inch</span>&nbsp;&nbsp;&nbsp;
    <input type="radio"  name='inch'/> &nbsp;
    <span>12-Inch</span>&nbsp;&nbsp;&nbsp;
    <input type="radio"  name='inch'/> &nbsp;
    <span>14-Inch</span>&nbsp;&nbsp;&nbsp;<br/><br/>
    <label>Toppings</label><br/>
    <input type='checkbox' name="toppings"/>&nbsp;&nbsp;<span>pepperoni</span>&nbsp;&nbsp;
    <input type='checkbox' name="toppings" />&nbsp;&nbsp;<span>Onions</span>&nbsp;&nbsp;
    <input type='checkbox' name="toppings"/>&nbsp;&nbsp;<span>Mushrooms</span>&nbsp;&nbsp;
    <input type='checkbox' name="toppings"/>&nbsp;&nbsp;<span>Sauasaga</span>&nbsp;&nbsp;<br/><br/>
    <input type='checkbox' required/>&nbsp;<span>I agree to the TERMS AND CONDITIONS</span>
    
      </form>
    </Box>
    <Button w="40vw" colorScheme='red' mt="10px" onClick={()=>Orderfn()}>Order Now</Button>
  </Box>
  )
}

export default Order