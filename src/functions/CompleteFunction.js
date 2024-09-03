import { supabase } from "../supabaseConfig";

export const completeRow = async (taskId, complete) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ complate: !complete })
    .eq('id', taskId)
    .select()

  if (error) {
    console.error(error);
  }
  console.log(taskId);
  
};