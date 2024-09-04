import React from "react";

const InfoBlock = ({ title, number }) => {
  return (
    <div className="bg-[#FFFFFF] w-[164px] lg:w-[252px] lg:h-[192px] h-[144px] rounded-[8px] border-[1px] px-[14px]">
      <p className="border-b-[1px] py-[12px] text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px]">
        {title}
      </p>

      <div className="w-full flex justify-center pt-[24px] lg:pt-[32px]">
        <p className="text-[28px] lg:text-[32px] leading-[34px] lg:leading-[38px]">{number}</p>
      </div>
    </div>
  );
};
 
export default InfoBlock;
