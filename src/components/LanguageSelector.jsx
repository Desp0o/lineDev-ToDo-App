import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isGeo, setIsGeo] = useState(false);

  const selectLanguage = () => {
    setIsGeo(!isGeo);
  };

  useEffect(()=>{
    if (isGeo) {
        i18n.changeLanguage("ge");
      } else {
        i18n.changeLanguage("en");
      }
  },[isGeo])

  return (
    <div
      onClick={selectLanguage}
      className="hidden lg:flex flex items-center gap-[10px] mr-[14px] cursor-pointer"
    >
      <p>{isGeo ? "EN" : "GE"}</p>
    </div>
  );
};

export default LanguageSelector;
