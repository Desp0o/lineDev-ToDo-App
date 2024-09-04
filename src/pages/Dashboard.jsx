import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { PieChart } from "../components/PieChart";
import FetchData from "../functions/FetchData";
import InfoBlock from "../components/InfoBlock";

const Dashboard = () => {
  const { data } = FetchData();
  const [completeLength, setCompleteLength] = useState(0);
  const [inProgressLength, setInProgressLength] = useState(10);
  const [importantLength, setImportantLength] = useState(0);

  useEffect(() => {
    //set complete todos
    const isComplete = data?.filter((item) => item.complate === true);
    setCompleteLength(isComplete?.length);

    //set complete todos
    const isInProgress = data?.filter((item) => item.complate === true);
    setInProgressLength(data?.length - isComplete?.length);

    //set complete todos
    const isImportant = data?.filter((item) => item.important === true);
    setImportantLength(isImportant?.length);
  }, [data]);

  return (
    <Layout>
      <div className="2xl:max-w-[1440px] mx-auto flex flex-col lg:items-center gap-[24px]">
        <div className="grid grid-cols-2 gap-y-[16px] lg:flex lg:gap-[24px]">
          <InfoBlock title="All Tasks" number={data?.length} />
          <InfoBlock title="In Progress" number={inProgressLength} />
          <InfoBlock title="Stuck" number={2} />
          <InfoBlock title="Done" number={completeLength} />
        </div>

        <div className="lg:w-[1080px]">
          <PieChart
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
