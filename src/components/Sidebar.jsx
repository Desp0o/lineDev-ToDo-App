import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-[290px] h-full border-r-[1px] border-[##C7CAD0]">
      <Link to="/">go to home</Link>
      <Link to="/dashboard">go to dashboard</Link>
    </div>
  );
};

export default Sidebar;
