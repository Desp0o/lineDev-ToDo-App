import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setBurgerActive } from "../redux/burgerSlicer";

const SideBarItem = ({ path, icon, title }) => {
  const dispatch = useDispatch();

  return (
    <NavLink
      onClick={()=>dispatch(setBurgerActive(false))}
      to={path}
      className="w-[252px] h-[48px] rounded-[4px] flex items-center pl-[16px] gap-[12px]"
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#E7E8EA" : "transparent",
      })}
    >
      {icon}
      <p className="text-[14px] leading-[16px]">{title}</p>
    </NavLink>
  );
};

export default SideBarItem;
