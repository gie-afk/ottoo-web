import React from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//Dashboard
import Dashboard from "./pages/Dashboard";
import Listings from "./components/Listings";
import Agents from "./components/Agents";

const routeConfig = [
  { path: "/", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
			{ path: "", element: <Listings /> },
			{ path: "agents", element: <Agents /> },
		],
  },
];

const App = () => {
  const navigate = useNavigate();
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route key={child.path} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
			</Routes>
    </HeroUIProvider>
  );
};

export default App;
