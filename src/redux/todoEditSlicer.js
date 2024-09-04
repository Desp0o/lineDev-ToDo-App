import { createSlice } from "@reduxjs/toolkit";

const todoEditSlicer = createSlice({
    name: "todoEditSlicer",
    initialState: {
        value: '',
        id: null
    },
    reducers:{
        setTodoTextForEdit(state, action){
            state.value = action.payload.value
            state.id = action.payload.id
        }
    }
})

export const { setTodoTextForEdit } = todoEditSlicer.actions
export default todoEditSlicer.reducer