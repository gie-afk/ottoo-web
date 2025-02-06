import Header from "../components/Header";
import SideNavs from "../components/SideNavs";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen min-h-screen">
      <div className="z-50 fixed w-full">
        <Header toggleNav={toggleNav} isNavVisible={isNavVisible} />
      </div>
      <div
        className="grid grid-cols-12 flex-grow"
        style={{ marginTop: "56px" }}
      >
        <div
          className={`${
            isNavVisible ? "block shadow-xl" : "hidden"
          } col-span-11 md:block lg:block p-4 md:col-span-3 lg:col-span-3 xl:col-span-2 bg-white z-10`}
          style={{ height: "calc(100vh - 56px)", overflow: "auto" }}
        >
          <SideNavs toggleNav={toggleNav}/>
        </div>
        <div
          className={`${
            isNavVisible ? "hidden" : "col-span-12"
          } md:block lg:block md:col-span-9 lg:col-span-9 xl:col-span-10 bg-gray-100 p-4 md:p-8 lg:p-8`}
          style={{ height: "calc(100vh - 56px)", overflowY: "auto" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
