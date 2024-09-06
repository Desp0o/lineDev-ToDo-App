import { createSlice } from "@reduxjs/toolkit";

const addTaskSlicer = createSlice({
    name:"addTaskSlicer",
    initialState:{
        value: false
    },
    reducers:{
        setInputEmpty(state, action){
            state.value = action.payload
        }
    }
})

export const { setInputEmpty } = addTaskSlicer.actions
export default addTaskSlicer.reducer