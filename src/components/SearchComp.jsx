import React, { useEffect, useState } from "react";
import { bigSearchIcon } from "../assets/icons/BigSearchIcon";
import { useTranslation } from "react-i18next";
import FetchData from "../functions/FetchData";
import { useDispatch } from "react-redux";
import { setSearchRedux } from "../redux/searchSlicer";

const SearchComp = () => {
  const { data } = FetchData();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const disptch = useDispatch();

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    disptch(setSearchRedux(searchValue));
  }, [searchValue]);

  const search = (keyword) => {
    return data?.filter((note) => note.description.includes(keyword));
  };

  return (
    <div className="flex w-[320px] lg:w-[460px] h-[40px] relative">
      <span className="absolute left-[14px] top-[9px]">{bigSearchIcon}</span>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={handleSearchValue}
        placeholder={t("search")}
        className="w-full h-full pl-[44px] rounded-[8px] bg-[#E7E8EA] placeholder:text-black placeholder:text-[14px]"
      />
    </div>
  );
};

export default SearchComp;
