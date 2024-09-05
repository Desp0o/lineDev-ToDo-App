import React from "react";
import SideBarItem from "./SideBarItem";
import { sunIcon } from "../assets/icons/sunIcon";
import { starIcon } from "../assets/icons/starIcon";
import { CiBoxList } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setBurgerActive } from "../redux/burgerSlicer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isBurgerActive = useSelector((state) => state.burgerStore.value);
  const {t, i18n} = useTranslation()

  const handleBurgerMenuClose = () => {
    dispatch(setBurgerActive(false));
  };

  return (
    <>
      {isBurgerActive && (
        <div
          className="left-[0px] z-[97] fixed w-screen h-screen bg-backdrop lg:hidden"
          onClick={handleBurgerMenuClose}
        />
      )}
      <div className="relative z-[99] bg-[#F6F6F7] flex flex-col w-[290px] h-full border-r-[1px] border-[#C7CAD0] pt-[100px] pl-[24px] pr-[12px]">
        <span
          onClick={handleBurgerMenuClose}
          className="lg:hidden absolute right-[20px] top-[20px] cursor-pointer"
        >
          <IoCloseOutline size={40} color="#252931" />
        </span>

        <SideBarItem path="/" title={t("myDay")} icon={sunIcon} />
        <SideBarItem path="/importants" title={t("importants")} icon={starIcon} />
        <SideBarItem
          path="/dashboard"
          title={t("dashboard")}
          icon={<CiBoxList size={20} />}
        />
      </div>
    </>
  );
};

export default Sidebar;
