import { legacy_createStore as createStore } from "redux";
import pizzaReducer from "./Reducer";

const pizzaStore = createStore(pizzaReducer)
pizzaStore.subscribe(()=>{
    pizzaStore.getState()
})
export default pizzaStore;