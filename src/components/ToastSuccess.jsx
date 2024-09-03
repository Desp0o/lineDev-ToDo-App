import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (text) => {
  toast.success(text, {
    autoClose: 1500, 
    theme: "colored",
  });
};