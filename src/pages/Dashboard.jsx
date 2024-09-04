import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { PieChart } from "../components/PieChart";
import FetchData from "../functions/FetchData";
import InfoBlock from "../components/InfoBlock";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { setNavigationPage } from "../redux/navigationSlicer";


const Dashboard = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = FetchData();
  const [completeLength, setCompleteLength] = useState(0);
  const [inProgressLength, setInProgressLength] = useState(0);
  const [importantLength, setImportantLength] = useState(0);

  useEffect(() => {
    //set complete todos
    const isComplete = data?.filter((item) => item.complate === true);
    setCompleteLength(isComplete?.length);

    //set complete todos
    setInProgressLength(data?.length - isComplete?.length);

    //set complete todos
    const isImportant = data?.filter((item) => item.important === true);
    setImportantLength(isImportant?.length);
  }, [data]);

  useEffect(()=>{
    dispatch(setNavigationPage(2))
  },[])


  return (
    <Layout>
      {isLoading ? (
        <span className="absolute bottom-1/2 left-1/2">
          <Spinner />
        </span>
      ) : (
        <div className="2xl:max-w-[1440px] mx-auto flex flex-col lg:items-center gap-[24px] pb-[50px]">
          <div className="
            grid grid-cols-2 place-items-center gap-y-[16px]  
            md:justify-between md:flex md:gap-[24px]>
            lg:grid lg:grid-cols-2 lg:gap-[16px]  
            1xl:flex 1xl:gap-[24px]">
            <InfoBlock title="All Tasks" number={data?.length} />
            <InfoBlock
              title="In Progress"
              number={inProgressLength ? inProgressLength : 0}
            />
            <InfoBlock title="Stuck" number={2} />
            <InfoBlock title="Done" number={completeLength} />
          </div>

          <div className="w-full 1xl:w-[1080px]">
            <PieChart
              completedTodos={completeLength}
              inProgessTodos={inProgressLength}
              importantTodos={importantLength}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
