import React, { useEffect, useState } from "react";
import { plusIcon } from "../assets/icons/plusIcon";
import AddFunction from "../functions/AddFunction";
import { useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import UseEditFunction from "../functions/UseEditFunction";
import { LiaEdit } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import { setTodoTextForEdit } from "../redux/todoEditSlicer";
import { setInputEmpty } from "../redux/addTaskSlicer";

const AddTask = ({ refetch }) => {
  const editTask = UseEditFunction();
  const addTask = AddFunction()
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [value, setValue] = useState("");
  const { user } = useUser();
  const toDoTextForEdit = useSelector((state) => state.todoEditStore);
  const isEmptyInput = useSelector((state) => state.taskIconStore.value);

  useEffect(() => {
    setValue(toDoTextForEdit.value);
  }, [toDoTextForEdit.value]);

  useEffect(() => {
    if (value.length === 0) {
      dispatch(setTodoTextForEdit({ id: null, value: "" }));
    }
    if(value.length > 0 ){
      dispatch(setInputEmpty(false))
    }
  }, [value]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(()=>{
    isEmptyInput && setValue('')
  },[isEmptyInput])

  return (
    <div className="bg-[#FFFFFF] mx-auto relative h-[48px] w-[343px] lg:w-[570px] rounded-[8px] px-[14px] py-[10px] shadow-taskShadow flex items-center gap-[6px]">
      {toDoTextForEdit.value.length === 0 ? (
        <span
          onClick={() => addTask(user.id, value, refetch)}
          className="absolute left-[20px] w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
        >
          {plusIcon}
        </span>
      ) : (
        <span
          className="absolute left-[20px] w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          onClick={() => editTask(value, refetch)}
        >
          {<LiaEdit />}
        </span>
      )}
      <input
        className="pl-[34px] w-full"
        type="text"
        value={value}
        onChange={handleValue}
        placeholder={t("addTask")}
      />
    </div>
  );
};

export default AddTask;
