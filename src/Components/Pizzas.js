import React from "react";
import {  useSelector } from "react-redux";

import { Box, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

function Pizzas() {
  const storeData = useSelector((reduxStoreData) => {
    return reduxStoreData.pizzas;
  });
  const navigate = useNavigate();
  const allPizzas = storeData;

  // const dispatch = useDispatch();

  const OrderFn = () => {
    navigate("/order");
  };
  return (
    <Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto ",
          gap: "20px",
          marginTop: "300px",
          marginLeft: "0",
        }}
        w="85vw"
        padding="10px"
      >
        {allPizzas.map((item) => {
          return (
            <div
              style={{ textAlign: "center", margin: "10px" }}
              key={item.id}
              className="main"
            >
              <img
                src={item.linkImagen}
                style={{
                  borderRadius: "50%",
                  height: "200px",
                  width: "200px",
                  marginTop: "8px",
                }}
                alt="pizza"
              />
              <p
                style={{ marginTop: "8px", color: "#ffbf00", fontSize: "bold" }}
              >
                {item.nombre}
              </p>
              <p style={{ marginTop: "8px", color: "red" }}>${item.precio}</p>
              <div className="OnOverPart">
                <Link to={`/view/${item.id}`}>
                  <Button style={{ backgroundColor: "brown", color: "white" }}>
                    Quick View
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    OrderFn();
                  }}
                  ml="5px"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          );
        })}
      </Box>
    </Box>
  );
}

export default Pizzas;
