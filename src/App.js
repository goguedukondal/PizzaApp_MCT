import "./App.css";

import Nav from "./Components/Nav";
import { Flex, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Order from "./Components/Order";
import OrderSuccess from "./Components/OrderSuccess";
import Menu from "./Components/Menu";
import Blde from "./Components/Blde";
import Events from "./Components/Events";
import Landing from "./Components/Landing";
import View from "./Components/View";
function App() {
  return (
    <Box width='100vw' height='100vh' position="relative">
      <Flex flexDirection='row'>
      <Box position='fixed'>
      <Nav />
      </Box>
      <Box width='80vw' height='100vh' position="absolute" left="180px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blde" element={<Blde />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/view/:id" element={<View/>}/>
      </Routes>
      </Box>
      </Flex>
    </Box>
  );
}

export default App;
