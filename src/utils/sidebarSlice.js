import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isOpen:false
    },
    reducers:{
        sidebarOpen:(action)=>{
            action.isOpen = !action.isOpen
        },
        sidebarHide:(action)=>{
            action.isOpen = false
        }
    }
});

export const{sidebarOpen,sidebarHide}= sidebarSlice.actions;

export default sidebarSlice.reducer;