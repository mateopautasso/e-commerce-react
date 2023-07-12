import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        inCart: []
    },
    reducers: {
        addToCart: (state, action)=>{
            state.inCart = [...state.inCart, action.payload];
        },
        removeToCart: (state, action)=>{
            state.inCart = state.inCart.filter((product)=>product.id !== action.payload.id);
        }
    }
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;