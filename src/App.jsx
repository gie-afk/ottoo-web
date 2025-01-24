import React from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

const routeConfig = [
	{ path: "/", element: <Login /> },
	{ path: "/sign-up", element: <SignUp /> },
	{ path: "/dashboard", element: <Dashboard /> },
];

const App = () => {
	const navigate = useNavigate();
	return (
		<HeroUIProvider navigate={navigate} useHref={useHref}>
			<Routes>
				{routeConfig.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
				))}
			</Routes>
		</HeroUIProvider>
	);
};

export default App;
