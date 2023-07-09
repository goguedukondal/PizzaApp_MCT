import React from "react";
import { Box, Heading, Text, Flex, Input, Button } from "@chakra-ui/react";
import "./Home.css";
import { useEffect } from "react";
import PizzasActionCreator from "../Redux/ActionCreators/PizzasActionCreator";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";

import Pizzas from "./Pizzas";
function Home() {
 
  const storeData =useSelector((reduxStoreData)=>{return reduxStoreData.pizzas})
 
  const allPizzas =storeData
 
 
  
  const dispatch = useDispatch()
  useEffect(() => {
    if(allPizzas.length===0){
      axios({
        method: "GET",
        url: "https://pizzaallapala.p.rapidapi.com/productos",
        headers: {
          "X-RapidAPI-Key": "ac333bbf6bmsh14e046b1864a865p18c2fcjsn713487bf51d8",
          "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
        },
      }).then((res) => {
        // setPizzas(res.data.productos);
        dispatch(PizzasActionCreator(res.data.productos))
      });
    }
    
  }, [allPizzas,dispatch]);

return(
  <Box
  backgroundImage="url('https://th.bing.com/th/id/OIP.61WMT68T2NQ4CMikpt2ooQHaDF?w=329&h=145&c=7&r=0&o=5&dpr=1.5&pid=1.7')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundAttachment="fixed"
  backgroundSize="100% 100%"
  width="85vw"
  height="100vh"
>
<Flex flexDirection="column" gap="15px" padding="100px">
        <Box>
          <Heading color="white">DELIVERY TO THE</Heading>
          <Heading color="white">DOOR STEP</Heading>
        </Box>
        <Box>
          <Text color="white">Choose Your Ingradients</Text>
          <Text color="white">Get Free Delivery 24/7</Text>
          <Text color="white">Special Gift Coupons</Text>
        </Box>
        <Box mt="20px">
          <Input w="300px" bg="white" placeholder="Email" color="black" />
          <Button ml="10px" bg="red" color="white">
            Subscribe
          </Button>
        </Box>
      </Flex>
    <Pizzas/>
  </Box>
)
  
}

export default Home;
// onMouseEnter={dispatch(ShowButtonActionCreator())}