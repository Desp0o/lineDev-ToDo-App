import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { PieChart } from "../components/PieChart";
import FetchData from "../functions/FetchData";
import InfoBlock from "../components/InfoBlock";
import { useTranslation } from "react-i18next";


const Dashboard = () => {
  const { t } = useTranslation();
  const { data } = FetchData();
  const [completeLength, setCompleteLength] = useState(0);
  const [inProgressLength, setInProgressLength] = useState(0);
  const [importantLength, setImportantLength] = useState(0);
  const [isEmpty, setEmpty] = useState(false)

  useEffect(()=>{
    if(data?.length === 0){
      setEmpty(true)
    }else{
      setEmpty(false)
    }
  },[data])

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


  return (
    <Layout>
        <div className="2xl:max-w-[1440px] mx-auto flex flex-col lg:items-center gap-[24px] pb-[50px]">
          <div className="
            grid grid-cols-2 place-items-center gap-y-[16px]  
            md:justify-between md:flex md:gap-[24px]>
            lg:grid lg:grid-cols-2 lg:gap-[16px]  
            1xl:flex 1xl:gap-[24px]">
            <InfoBlock title={t("AllTasks")} number={data?.length} />
            <InfoBlock
              title={t("inProgress")}
              number={inProgressLength ? inProgressLength : 0}
            />
            <InfoBlock title={t("stuck")} number={0} />
            <InfoBlock title={t("done")} number={completeLength} />
          </div>


          <div className="w-full 1xl:w-[1080px]">
            <PieChart
              isData={isEmpty}
              completedTodos={completeLength}
              inProgessTodos={inProgressLength}
              importantTodos={importantLength}
            />
          </div>
        </div>
    </Layout>
  );
};

export default Dashboard;
