import React from 'react'
import { supabase } from '../supabaseConfig'
import { useSelector } from 'react-redux'

const UseEditFunction = () => {
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

        } else {
            console.log(data);
            refetch()
        }
    }



    return editTask
}

export default UseEditFunction