import { supabase } from "../supabaseConfig"

export const deleteTask = async (taskId, refetch) => {
    const { error } = await supabase.
    from('todos')
    .delete()
    .eq('id', taskId)

    if(error){
        console.log(error);
    }
    //refetch main query
    refetch()
}