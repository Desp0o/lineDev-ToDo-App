import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const toastError = (text) => {
    toast.error(text, {
        autoClose: 1500,
        theme: "colored",
    })
}