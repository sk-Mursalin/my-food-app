import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../utils/cartSlice";
import sidebarReducer from "../utils/sidebarSlice"
const myStore = configureStore({
    reducer:{
        cart:cartSliceReducer,
        sidebar:sidebarReducer
    }
});

export default myStore;