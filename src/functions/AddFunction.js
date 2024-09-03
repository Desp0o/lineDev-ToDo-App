
import { supabase } from "../supabaseConfig";

export const addTask = async (userId,todoValue, refetch) => {

    const { data, error } = await supabase
      .from('todos')
      .insert(
        [
          { user_id: userId, description: todoValue, complate: false, important: true }
        ]
      ).select()

    if(error){
        console.error(error);   
    }

    //refetch main query
    refetch()
  }