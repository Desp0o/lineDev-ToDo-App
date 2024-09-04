import { createSlice } from "@reduxjs/toolkit";

const todoEditSlicer = createSlice({
    name: "todoEditSlicer",
    initialState: {
        value: ''
    },
    reducers:{
        setTodoTextForEdit(state, action){
            state.value = action.payload
        }
    }
})

export const { setTodoTextForEdit } = todoEditSlicer.actions
export default todoEditSlicer.reducer