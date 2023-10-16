import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
// this store file 

 export const store = configureStore({
    // in need to reducer
    reducer:{
    // reducer should be key value pair
    Counter:counterSlice

    }
})