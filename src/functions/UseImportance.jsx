import React from 'react'
import { supabase } from '../supabaseConfig'
import { notifySuccess } from '../components/ToastSuccess'
import { toastError } from '../components/ToastError'
import { setAactiveIndex } from '../redux/settingSlicer'
import { useDispatch } from 'react-redux'


const UseImportance = () => {
    const dispatch = useDispatch()

    const makeImportant = async (taskId, important, refetch) => {

        const { data, error } = await supabase
            .from('todos')
            .update({ important: !important })
            .eq('id', taskId)
            .select()

        if (error) {
            toastError("Can't mark Todo as Important")
            console.error(error);
        } else {
            dispatch(setAactiveIndex(null));
            refetch()
            if (important === true) {
                notifySuccess("removed from Important")
            } else {
                notifySuccess("Marked as Important")
            }
        }
    }

    return makeImportant
}

export default UseImportance