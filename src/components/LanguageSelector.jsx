import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const selectLanguage = () => {

    if(i18n.language === 'en'){
      i18n.changeLanguage("ge");
    }else{
      i18n.changeLanguage("en");
    }
  };

  return (
    <div
      onClick={selectLanguage}
      className="lg:flex flex items-center gap-[10px] mr-[14px] cursor-pointer"
    >
      <p>{i18n.language === 'ge' ? "EN" : "GE"}</p>
    </div>
  );
};

export default LanguageSelector;
