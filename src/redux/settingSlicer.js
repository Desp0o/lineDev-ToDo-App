import { createSlice } from "@reduxjs/toolkit";

const settingSlicer = createSlice({
    name:"settingSlicer",
    initialState:{
        value: null
    },
    reducers:{
        setAactiveIndex(state, action){
            state.value = action.payload
        }
    }
})

export const { setAactiveIndex } = settingSlicer.actions
export default settingSlicer.reducer