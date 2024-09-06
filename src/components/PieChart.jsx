import React from "react";
import Layout from "../components/Layout";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, ArcElement } from "chart.js";
import LegendComponent from "./LegendComponent";
import { useTranslation } from "react-i18next";
ChartJS.register(Title, Tooltip, ArcElement);

export const PieChart = ({
  isData,
  completedTodos,
  inProgessTodos,
  importantTodos,
}) => {
  const { t } = useTranslation();

  const legendArray = [
    {
      color: "#00A9D7",
      status: t("importnace"),
    },
    {
      color: "#FFA400",
      status: t("inProgress"),
    },
    {
      color: "#80BC00",
      status: t("complete"),
    },
  ];

  const data = {
    labels: [t("importnace"), t("inProgress"), t("complete")],
    datasets: [
      {
        label: "Todo chart",
        data: [importantTodos, inProgessTodos, completedTodos],
        backgroundColor: ["#00A9D7", "#FFA400", "#80BC00"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="w-full bg-[#FFFFFF] min-h-[300px] rounded-[8px] border-[1px] border-[#E7E8EA] px-[14px] pt-[12px] pb-[60px]">
      {isData ? (
        <div className="w-full min-h-[200px] flex items-center justify-center">
          <p className="text-[18px]">{t("noData")}</p>
          </div>
      ) : (
        <>
          <p className="text-center lg:text-start text-[16px] lg:text-[20px] leading-[20px] lg:leading-[20px] border-b pb-[12px]">
            {t("taskByStatus")}
          </p>

          {/* chart */}
          <div className="mt-[32px] w-full flex flex-col lg:flex-row items-center lg:justify-center gap-[24px]">
            <div className="flex items-center justify-center w-[232px] h-[226px] lg:w-[330px]">
              <Pie data={data} />
            </div>

            {/* legend */}
            <div className="flex flex-col gap-[16px] b-black">
              {legendArray.map((item, index) => {
                return (
                  <LegendComponent
                    key={index}
                    color={item.color}
                    status={item.status}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
