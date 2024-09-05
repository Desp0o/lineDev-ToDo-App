import React, { useEffect } from "react";
import { burgerMenu } from "../assets/icons/burgerMenu";
import { searchIcon } from "../assets/icons/searchIcon";
import SearchComp from "./SearchComp";
import { dropDownIcon } from "../assets/icons/DropDownIcon";
import { UserButton } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerActive } from "../redux/burgerSlicer";
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const dispatch = useDispatch()

  const burgerMenuHandler = () => {
    dispatch(setBurgerActive(true))
  }
  const { i18n } = useTranslation()
  const selectLanguage = () => {
    
    i18n.changeLanguage('ge')
  }

  return (
    <div className="bg-[#F6F6F7] w-full h-[56px] lg:h-[68px] border-b-[1px] px-[16px] lg:px-[40px] py-[8px] box-border flex items-center justify-between fixed z-[99] lg:relative lg:pl-[332px]">
      <span className="cursor-pointer lg:hidden" onClick={burgerMenuHandler}>{burgerMenu}</span>
      <SearchComp />

      {/* avatar */}
      <div className="flex itmes-center ml-[47px] lg:ml-[0px]">
        <div onClick={selectLanguage} className="hidden lg:flex flex items-center gap-[10px] mr-[14px] cursor-pointer">
          <p>EN</p>
          {dropDownIcon}
        </div>

        {window.innerWidth > 1023 && (
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-[44px] w-[44px]  lg:block",
                userButtonPopoverFooter: "hidden",
                cardBox: "!h-[30rem]",
              },
            }}
          />
        )}
      </div>

      {/* search | avatar */}
      <div className="flex items-center gap-[18px] lg:hidden">
        <span>{searchIcon}</span>
        <span className="h-[16px] w-[1px] bg-[#82868F]" />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-[24px] w-[24px] ",
              userButtonPopoverFooter: "hidden",
              cardBox: "!h-[30rem]",
            },
          }}
        ></UserButton>
      </div>
    </div>
  );
};

export default Navbar;
