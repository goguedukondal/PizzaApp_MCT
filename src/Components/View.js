import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function View() {
  const [singlePizza, setSinglePizza] = useState({});
  const navigate = useNavigate()
  const { id } = useParams();
  const storeData = useSelector((reduxStoreData) => {
    return reduxStoreData.pizzas;
  });

  const allPizzas = storeData;
  useEffect(() => {
    setSinglePizza(allPizzas.find((item) => item.id ===parseInt(id)));
  }, [allPizzas,id]);
 
  // console.log(allPizzas)

  const Orderfn=()=>{
    navigate('/order')
  }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      height="80vh"
      width="70vw"
      m="50px auto"
    >
      <Box w="50%" h="100%" bg="#fff7e6">
        <Image
          objectFit="cover"
          w="80%"
          h="80%"
          m="50px auto"
          src={singlePizza.linkImagen}
          alt="Caffe Latte"
          borderRadius="50%"
        />
      </Box>

      <Stack w="50%">
        <CardBody>
          <Heading size="md" colorScheme="red">
            {singlePizza.nombre}
          </Heading>

          <Text py="2" fontSize="3xl" color="red">
            {singlePizza.precio}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Heading size="md" color="#cca300" mt="10px">
            NUTRIOTIONAL VALUE PER 100 G :
          </Heading>
          <Box>
            <Text>
              Caleries
              <span style={{ color: "#cca300" }}>
                {" "}
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . .{" "}
              </span>{" "}
              <span style={{ color: "red" }}>800 kcal</span>
            </Text>
            <Text>
              CarboHydrates
              <span style={{ color: "#cca300" }}>
                {" "}
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
              </span>{" "}
              <span style={{ color: "red" }}>20 gm</span>
            </Text>
            <Text>
              Fats
              <span style={{ color: "#cca300" }}>
                {" "}
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . .{" "}
              </span>{" "}
              <span style={{ color: "red" }}>40 gm</span>
            </Text>
          </Box>
          <Box mt="5px">
            <Text >
              <span style={{color:"#cca300"}}>COLA</span> <span style={{marginLeft:"60px"}}>:</span> 
              <span style={{marginLeft:"60px",color:"red"}}>
                S7.00
              </span>
            </Text>
            <Text><span style={{color:"#cca300"}}>MEAL</span><span style={{marginLeft:"63px"}}>:</span> 
              <span style={{marginLeft:"60px",color:"red"}}>
                S50.00
              </span></Text>
          </Box>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="red" onClick={()=>{Orderfn()}}>
            Add to Cart
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default View;
