import React from "react";
import Topbar from "./components/navabar/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Topbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
