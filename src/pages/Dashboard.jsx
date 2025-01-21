import Header from "../components/Header";
import SideNavs from "../components/SideNavs";
import DashboardContent from "../components/DashboardContent";
import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-col h-screen">
			<div>
				<Header />
			</div>
			<div className="flex flex-grow">
				<div className="w-1/6 p-4">
					<SideNavs />
				</div>
				<div className="flex-grow bg-gray-100 px-16 py-8 -z-50">
					<DashboardContent />
				</div> 
			</div>
		</div>
	);
};

export default Dashboard;
