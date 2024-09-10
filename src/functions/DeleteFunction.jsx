import { useDispatch } from "react-redux";
import { toastError } from "../components/ToastError";
import { notifySuccess } from "../components/ToastSuccess";
import { supabase } from "../supabaseConfig";
import { setAactiveIndex } from "../redux/settingSlicer";

export const UseDeleteTask = () => {
    const dispatch = useDispatch();

    const deleteTask = async (taskId, refetch) => {
        console.log("deleting");
        
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', taskId);

        if (error) {
            console.error(error);
            toastError("Can't delete Todo");
        } else {
            dispatch(setAactiveIndex(null));
            notifySuccess("Todo removed successfully");
            refetch();
        }
    };

    return deleteTask;
};
