import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ToDoCard from "./ToDoCard";
import { DateFormatter } from "./DateFormatter";
import AddTask from "./AddTask";
import Spinner from "./Spinner";

const MappingMasonryLayout = ({ data, isLoading, refetch }) => {
  const isEditing = useSelector((state) => state.todoEditStore);

  useEffect(() => {
    if (isEditing && isEditing.value.length !== 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isEditing.value]);

  return (
    <>
      <AddTask refetch={refetch} />
      <div className="relative flex justify-center mt-[56px] pb-[100px]">
        <div className=" md:columns-2 lg:columns-3 1xl:columns-4 space-y-[23px] gap-[23px]">
          {isLoading ? (
            <Spinner />
          ) : data && data.length > 0 ? (
            data.map((toDo, index) => {
              return (
                <div className="break-inside-avoid" key={index}>
                  <ToDoCard
                    index={index}
                    text={toDo.description}
                    date={<DateFormatter dateProp={toDo.created_at} />}
                    taskId={toDo.id}
                    complete={toDo.complate}
                    important={toDo.important}
                    refetch={refetch}
                  />
                </div>
              );
            })
          ) : (
            <p className="text-[20px] font-[900] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[50px]">
              You Have no ToDos
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MappingMasonryLayout;
