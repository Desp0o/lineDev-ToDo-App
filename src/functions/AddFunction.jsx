
import { supabase } from "../supabaseConfig";
import { notifySuccess } from "../components/ToastSuccess";
import { toastError } from "../components/ToastError";
import { useDispatch } from "react-redux";
import { setInputEmpty } from "../redux/addTaskSlicer";


const AddFunction = () => {
  const dispatch = useDispatch()

   const addTask = async (userId, todoValue, refetch) => {
    
    if (todoValue.length > 0) {
      const { data, error } = await supabase
        .from('todos')
        .insert(
          [
            { user_id: userId, description: todoValue, complate: false, important: true }
          ]
        ).select()
  
      if (error) {
        console.error(error);
        toastError("Something went wrong!")
      } else {
        notifySuccess("Todo added successfully")
        dispatch(setInputEmpty(true))
      }
  
      //refetch main query
      refetch()
  
    } else {
      toastError("Todo is empty")
    }
  
  
  }

  return addTask
}

export default AddFunction