import { useDispatch } from "react-redux";
import { toastError } from "../components/ToastError";
import { notifySuccess } from "../components/ToastSuccess";
import { supabase } from "../supabaseConfig";
import { setAactiveIndex } from "../redux/settingSlicer";

export const UseDeleteTask = () => {
    const dispatch = useDispatch();

    const deleteTask = async (taskId, refetch) => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', taskId);

        if (error) {
            console.error(error);
            toastError("Can't delete Todo");
        } else {
            dispatch(setAactiveIndex(999999));
            notifySuccess("Todo removed successfully");
        }

        // Refetch the main query
        if (refetch) {
            refetch();
        }
    };

    return deleteTask;
};
