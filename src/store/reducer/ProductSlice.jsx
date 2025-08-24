import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : [],
}

const ProductSlice = createSlice({
    name : "productslice",
    initialState,
    reducers : {
        loadproduct : (state,action)=>{
            state.data = action.payload;
        }
        
    }
})

export default ProductSlice.reducer;
export const {loadproduct} = ProductSlice.actions;