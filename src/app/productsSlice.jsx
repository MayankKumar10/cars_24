import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  products: [],
  status: "idle",
  error: null,
}

let URL = "https://fakestoreapi.com/products"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
  try{
    let res = await axios.get(URL)
    let result = await res.data
    return result
  } catch (err) {
    return err.message
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    like: (state, action) =>{
      let { id } = action.payload
      let productId = state.products.find((product)=> product.id === id)
      if(productId) productId.like++
    },
    dislike: (state, action) =>{
      let { id } = action.payload
      let productId = state.products.find((product)=> product.id === id)
      if(productId) productId.dislike++
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state)=>{
      state.status = "loading"
    })
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.status = "success"
      let allProducts = action.payload.map((product)=>({
        ...product,
        like: 0,
        dislike: 0,
      }))
      state.products = allProducts
    })
    .addCase(fetchProducts.rejected, (state, action)=>{
      state.status = "error"
      state.error = action.error.message
    })
  }
})

export const {like, dislike} = productsSlice.actions
export const ProductReducer = productsSlice.reducer