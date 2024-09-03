
import { supabase } from "../supabaseConfig";
import { toast } from "react-toastify";
import { notifySuccess } from "../components/ToastSuccess";
import { toastError } from "../components/ToastError";

export const addTask = async (userId, todoValue, refetch) => {
  // const notify = () => toast.success('Todo Added Successfully!', { autoClose: 1500, theme: "colored" });
  const notifyErr = () => toast.error('Something went wrong!', { autoClose: 1500, theme: "colored" });


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
    }

    //refetch main query
    refetch()

  } else {
    toastError("Todo is empty")
  }


}