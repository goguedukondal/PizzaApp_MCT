const initialState = {
  pizzas: [],
 
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPIZZAS":
      state = {
        ...state,
        pizzas: action.payload,
      };
      break;
   
      
    default:
     return state;
  }
  return state;
};

export default pizzaReducer;
