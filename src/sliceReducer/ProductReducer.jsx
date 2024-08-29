
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={products:{}};

const productSlice = createSlice({
    name:"for_product",
    initialState,
    reducers:{
        setProducts:(state, action)=>{
            this.state.products = action.payload;
        }
        }
    }
)

export const getProductFromApi = ()=>{

    return(dispatch,getState)=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response => {      
          dispatch(setProducts(response.data));
        })
        .catch(error => {     
          console.log(error);
        })   
    }
}


export const{setProduct}=productSlice.actions;
export default productSlice.reducer;