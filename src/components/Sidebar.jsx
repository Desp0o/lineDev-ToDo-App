import React from "react";
import SideBarItem from "./SideBarItem";
import { sunIcon } from "../assets/icons/sunIcon";
import { starIcon } from "../assets/icons/starIcon";
import { CiBoxList } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-[290px] h-full border-r-[1px] border-[##C7CAD0] pt-[100px] pl-[24px]">
      <SideBarItem path="/" title="My Day" icon={sunIcon} />
      <SideBarItem path="/dashboard" title="Important" icon={starIcon} />
      <SideBarItem
        path="/dashboard"
        title="Dashboard"
        icon={<CiBoxList size={20} />}
      />
    </div>
  );
};

export default Sidebar;
