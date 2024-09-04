import { createSlice } from "@reduxjs/toolkit";

const navigationSlicer = createSlice({
    name:"navigationSlicer",
    initialState:{
        value: 0
    }, 
    reducers:{
        setNavigationPage(state, action){
            state.value = action.payload
        }
    }
})

export const { setNavigationPage } = navigationSlicer.actions
export default navigationSlicer.reducer