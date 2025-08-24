import {configureStore} from "@reduxjs/toolkit"
import CartSlice from './reducer/CartSlice'
import ProductSlice from './reducer/ProductSlice'
import UserSlice from './reducer/UserSlice'

export const Store = configureStore({
    reducer  : {
       userReducer : UserSlice,
       productReducer : ProductSlice,
       cartReducer : CartSlice,
    }
});