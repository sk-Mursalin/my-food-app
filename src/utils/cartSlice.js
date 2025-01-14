import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items.length = 0;
        },
        removeOneItem:(state,action)=>{
            state.items.splice(action.payload,1);
        }
    }
});

export const {addItem,clearCart,removeOneItem} = cartSlice.actions;

export default cartSlice.reducer