import React from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//Dashboard
import Dashboard from "./pages/Dashboard";
import Listings from "./components/dashboard/listings/Listings";
import Services from "./components/dashboard/services/Services";
import AddService from "./components/dashboard/services/AddService";
import ServicesLayout from "./components/dashboard/services/ServicesLayout";

const routeConfig = [
  { path: "/", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <Listings /> },
      { path: "services", 
        element: <ServicesLayout />,
        children: [
          { path: "", element: <Services /> },
          { path: "add-service", element: <AddService />}
        ]
      },
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
          <Route
            key={child.path}
            path={child.path}
            element={child.element}
          >
            {child.children?.map((nestedChild) => (
              <Route
                key={nestedChild.path}
                path={nestedChild.path}
                element={nestedChild.element}
              />
            ))}
          </Route>
        ))}
      </Route>
    ))}
  </Routes>
    </HeroUIProvider>
  );
};

export default App;
