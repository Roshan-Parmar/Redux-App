import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
};

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
         loaduser : (state,action) =>{
            state.data = action.payload;
        }
    }
});

export default UserSlice.reducer;
export const {loaduser} = UserSlice.actions;