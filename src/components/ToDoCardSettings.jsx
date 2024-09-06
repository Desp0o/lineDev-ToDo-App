import { starIcon } from "../assets/icons/starIcon";
import { completeIcon } from "../assets/icons/completeIcon";
import { editIcon } from "../assets/icons/editIcon";
import { deleteIcon } from "../assets/icons/deleteIcon";
import CompleteFunction from "../functions/CompleteFunction";
import { UseDeleteTask } from "../functions/DeleteFunction";
import UseImportance from "../functions/UseImportance";
import { useDispatch } from "react-redux";
import { setTodoTextForEdit } from "../redux/todoEditSlicer";
import { toastError } from "./ToastError";
import { useTranslation } from "react-i18next";

const ToDoCardSettings = ({ taskId, complete, refetch, important, text }) => {
  const { t } = useTranslation();
  const deleteTask = UseDeleteTask();
  const completeRow = CompleteFunction();
  const makeImportant = UseImportance();
  const dispatch = useDispatch();

  const getTextValueFromTask = () => {    
    //თუ დასრულებულია ტასკი ჩასწრების უფლება არ აქვს
    if (complete) {
      toastError("You cant edit completed todo");
    } else {
      dispatch(setTodoTextForEdit({ value: text, id: taskId }));
    }
  };

  return (
    <div
      className="h-[172px] w-[188px] bg-[#F6F6F7] px-[14px] py-[8px] rounded-[8px]
                    flex flex-col gap-[4px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
    >
      <div
        className="h-[34px] flex gap-[12px] items-center cursor-pointer"
        onClick={() => makeImportant(taskId, important, refetch)}
      >
        <span>{starIcon}</span>
        <p>{t("importnace")}</p>
      </div>

      <div
        className="h-[34px] flex gap-[12px] items-center cursor-pointer"
        onClick={() => completeRow(taskId, complete, refetch)}
      >
        <span>{completeIcon}</span>
        <p>{t("complete")}</p>
      </div>

      <div
        className="h-[34px] flex gap-[12px] items-center cursor-pointer"
        onClick={getTextValueFromTask}
      >
        <span>{editIcon}</span>
        <p>{t("edit")}</p>
      </div>

      <div
        className="h-[34px] flex gap-[12px] items-center cursor-pointer"
        onClick={() => deleteTask(taskId, refetch)}
      >
        <span>{deleteIcon}</span>
        <p>{t("delete")}</p>
      </div>
    </div>
  );
};

export default ToDoCardSettings;
