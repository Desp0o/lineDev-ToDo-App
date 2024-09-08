import React, { useEffect, useState } from "react";
import { burgerMenu } from "../assets/icons/burgerMenu";
import { searchIcon } from "../assets/icons/searchIcon";
import SearchComp from "./SearchComp";
import { UserButton } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setBurgerActive } from "../redux/burgerSlicer";
import LanguageSelector from "./LanguageSelector";
import ResponsiveSearch from "./ResponsiveSearch";

const Navbar = () => {
  const dispatch = useDispatch();

  const burgerMenuHandler = () => {
    dispatch(setBurgerActive(true));
  };

  const [isResSearch, setResSearch] = useState(false);

  return (
    <>
      <div className="bg-[#F6F6F7] w-full h-[56px] lg:h-[68px] border-b-[1px] px-[16px] lg:px-[40px] py-[8px] box-border flex items-center justify-between lg:relative lg:pl-[332px]">
        <span className="cursor-pointer lg:hidden" onClick={burgerMenuHandler}>
          {burgerMenu}
        </span>
        <span className="hidden lg:block">
          <SearchComp />
        </span>

        {/* avatar */}
        <div className="flex itmes-center ml-[47px] lg:ml-[0px]">
          <span className="lg:flex hidden">
            <LanguageSelector />
          </span>
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
          <span className="-mr-[10px]">
            <LanguageSelector />
          </span>
          <span className="h-[16px] w-[1px] bg-[#82868F]" />
          <span onClick={() => setResSearch(true)}>{searchIcon}</span>
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
      {isResSearch && (
        <div
          className="w-full h-screen bg-[hsl(0,0%,0%,0.55)]"
          onClick={() => setResSearch(false)}
        />
      )}
      {isResSearch && <ResponsiveSearch />}
    </>
  );
};

export default Navbar;
