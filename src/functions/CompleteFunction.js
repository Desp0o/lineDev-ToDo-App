import { toastError } from "../components/ToastError";
import { notifySuccess } from "../components/ToastSuccess";
import { supabase } from "../supabaseConfig";

export const completeRow = async (taskId, complete, refetch) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ complate: !complete })
    .eq('id', taskId)
    .select()
  console.log(complete);
  
  if (error) {
    toastError("Can't mark Todo as complete")
    console.error(error);
  }else{
    refetch()
    if(complete === true){
      notifySuccess("removed from complete")
    }else{
      notifySuccess("Marked as complete")
    }
  }
  console.log(taskId);
  
};