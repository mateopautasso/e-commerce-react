import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import categoryReducer from "./categorySlice/categorySlice";
import cartReducer from "./cartSlice/cartSlice"

export default configureStore({
    reducer:{
        user: userReducer,
        category: categoryReducer,
        cart: cartReducer
    }
})