import React from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
//Login and SignUp
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//Dashboard
import Dashboard from "./pages/Dashboard";
import Listings from "./components/dashboard/listings/Listings";
//Services
import Services from "./components/dashboard/services/Services";
import AddService from "./components/dashboard/services/AddService";
import ServicesLayout from "./components/dashboard/services/ServicesLayout";
//Customers
import AgentsLayout from "./components/dashboard/customers/AgentsLayout";
import Agents from "./components/dashboard/customers/Agents";
import AgentsPortal from "./components/dashboard/customers/AgentsPortal";
import AgentTeams from "./components/dashboard/customers/AgentTeams";
//Settings
import Settings from "./components/dashboard/settings/Settings";
import SettingsLayout from "./components/dashboard/settings/SettingsLayout";

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
      { path: "agents-portal", 
        element: <AgentsLayout />,
        children: [
          { path: "", element: <AgentsPortal /> },
          { path: "agents", element: <Agents /> },
          { path: "agent-teams", element: <AgentTeams />}
        ]
      },
      { path: "settings", 
        element: <SettingsLayout />,
        children: [
          { path: "", element: <Settings /> },
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
