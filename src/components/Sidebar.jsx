import React from "react";
import SideBarItem from "./SideBarItem";
import { sunIcon } from "../assets/icons/sunIcon";
import { starIcon } from "../assets/icons/starIcon";
import { CiBoxList } from "react-icons/ci";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const activePage = useSelector((state) => state.navigationStore.value);

  return (
    <div className="hidden lg:flex flex-col w-[290px] h-full border-r-[1px] border-[##C7CAD0] pt-[100px] pl-[24px] pr-[12px]">
      <div
        className="hover:bg-[#E7E8EA] transition-all rounded-[4px]"
        style={{
          backgroundColor: activePage === 0 ? "#E7E8EA" : "transparent",
        }}
      >
        <SideBarItem path="/" title="My Day" icon={sunIcon} />
      </div>

      <div
        className="hover:bg-[#E7E8EA] transition-all rounded-[4px]"
        style={{
          backgroundColor: activePage === 1 ? "#E7E8EA" : "transparent",
        }}
      >
        <SideBarItem path="/importants" title="Important" icon={starIcon} />
      </div>

      <div
        className="hover:bg-[#E7E8EA] transition-all rounded-[4px]"
        style={{
          backgroundColor: activePage === 2 ? "#E7E8EA" : "transparent",
        }}
      >
        <SideBarItem
          path="/dashboard"
          title="Dashboard"
          icon={<CiBoxList size={20} />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
