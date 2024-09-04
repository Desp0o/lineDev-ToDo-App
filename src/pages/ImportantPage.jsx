import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../supabaseConfig";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import ToDoCard from "../components/ToDoCard";
import { DateFormatter } from "../components/DateFormatter";
import { useDispatch } from "react-redux";
import { setNavigationPage } from "../redux/navigationSlicer";


const ImportantPage = () => {
  const { user } = useUser();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setNavigationPage(1))
  },[])


  const fetchImportants = async () => {
    let { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.id)
      .eq("important", true);

    if (error) {
      console.log(error);
      return;
    }
    return data;
  };

  const { data, isLoading, isError } = useQuery(
    ["important-todos", user?.id],
    fetchImportants,
    {
      enabled: !!user,
      retry: true,
    }
  );

  return (
    <Layout>
      <div className="flex justify-center mt-[32px]">
        <div className="md:columns-2 lg:columns-3 1xl:columns-4 break-inside-avoid space-y-[23px] gap-[23px] justify-items-center">
          {isLoading ? (
            <Spinner />
          ) : data && data.length > 0 ? (
            data.map((toDo, index) => {
              const rand = Math.floor(Math.random() * 4) + 1;
              return (
                <div className="break-inside-avoid">
                  <ToDoCard
                    key={index}
                    index={index}
                    text={toDo.description}
                    bg={rand}
                    date={<DateFormatter dateProp={toDo.created_at} />}
                    taskId={toDo.id}
                    complete={toDo.complate}
                    important={toDo.important}
                  />
                </div>
              );
            })
          ) : (
            <p className="text-[20px] font-[900] text-center absolute top-1/2 left-1/2">
              You Have no important ToDos
            </p>
          )}

          {/* for padding bottom */}
        </div>
      </div>
    </Layout>
  );
};

export default ImportantPage;
