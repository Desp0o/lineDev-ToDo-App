import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ToDoCard from "../components/ToDoCard";
import { DateFormatter } from "../components/DateFormatter";
import AddTask from "../components/AddTask";
import Spinner from "../components/Spinner";
import FetchData from "../functions/FetchData";
import { useSelector } from "react-redux";

const Home = () => {
  const { data, isLoading, refetch } = FetchData();

  const isEditing = useSelector(state => state.todoEditStore)

  useEffect(() => {
    if (isEditing && isEditing.value.length !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    console.log(isEditing.value);
    
  }, [isEditing.value]);


  return (
    <Layout>
      <AddTask refetch={refetch} />
      <div className="flex justify-center mt-[56px]">
        <div className="md:columns-2 lg:columns-3 1xl:columns-4 break-inside-avoid space-y-[23px] gap-[23px] justify-items-center ">
          {isLoading ? (
            <Spinner />
          ) : data && data.length > 0 ? (
            data.map((toDo, index) => {
              const rand = Math.floor(Math.random() * 4) + 1;
              return (
                <div className="break-inside-avoid" key={index}>
                  <ToDoCard
                    index={index}
                    text={toDo.description}
                    bg={rand}
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
            <p className="text-[20px] font-[900] text-center absolute top-1/2 left-1/2">
              You Have no ToDos
            </p>
          )}

          {/* for padding bottom */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
