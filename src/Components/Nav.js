import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Nav() {
  
  return (
    <Box h="100vh" p="10px" width="12vw" boxShadow="0 0 10px black" marginLeft="8px" bg="#fff7e6"  >
      <Flex flexDirection="column" gap="20px" mt="60px" alignItems="center"  >
        <Box>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            HOME
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/menu"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            PAGES
          </NavLink>
        </Box>
        <Box>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to="/menu"
          >
            MENU
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/events"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            EVENTS
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/blde"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            BLDE
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/landing"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            LANDING
          </NavLink>
        </Box>
      </Flex>
      <Box>
        <Button  colorScheme="red"  mt="220px" width="130px" height="50px">
          ORDER ONLINE
        </Button>
      </Box>
    </Box>
  );
}

export default Nav;
