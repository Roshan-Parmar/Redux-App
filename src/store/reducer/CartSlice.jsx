import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
}

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        loadcart : (state,action)=>{
            state.data = action.payload
        }
    }
})

export default CartSlice.reducer;