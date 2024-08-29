import { configureStore } from "@reduxjs/toolkit";


import ProductReducer from "./sliceReducer/ProductReducer";


const store = configureStore({
    reducer:{
        pr:ProductReducer
    }
})

export default store;