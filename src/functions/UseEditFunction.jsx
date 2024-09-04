import React from 'react'
import { supabase } from '../supabaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { toastError } from '../components/ToastError'
import { notifySuccess } from '../components/ToastSuccess'
import { setTodoTextForEdit } from '../redux/todoEditSlicer'

const UseEditFunction = () => {
    const dispatch = useDispatch()
    //todo id from redux
    const taskIdForEdit = useSelector(state => state.todoEditStore)

    const editTask = async (value, refetch) => {
        const { data, error } = await supabase
            .from('todos')
            .update({ description: value })
            .eq('id', taskIdForEdit.id)
            .select()
            console.log(value);
            
        if (error) {
            console.log(error);
            toastError("Can't Edit Todo")
        } else {
            notifySuccess("Todo edited successfully")
            refetch()
            dispatch(setTodoTextForEdit({value: '', id: null}))
        }
    }



    return editTask
}

export default UseEditFunction