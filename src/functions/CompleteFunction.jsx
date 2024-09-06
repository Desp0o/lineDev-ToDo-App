import { useDispatch } from "react-redux";
import { toastError } from "../components/ToastError";
import { notifySuccess } from "../components/ToastSuccess";
import { supabase } from "../supabaseConfig";
import { setAactiveIndex } from "../redux/settingSlicer";


const CompleteFunction = () => {

  const dispatch = useDispatch()

   const completeRow = async (taskId, complete, refetch) => {
    const { data, error } = await supabase
      .from('todos')
      .update({ complate: !complete })
      .eq('id', taskId)
      .select()
    
    if (error) {
      toastError("Can't mark Todo as complete")
      console.error(error);
    }else{
      dispatch(setAactiveIndex(null));
      refetch()
      if(complete === true){
        notifySuccess("removed from complete")
      }else{
        notifySuccess("Marked as complete")
      }
    }    
  };

  return completeRow
}

export default CompleteFunction