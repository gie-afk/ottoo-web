import { useNavigate } from "react-router-dom";
import { RectangleStackIcon, UsersIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from "@heroui/react";

const customerRedirect = [
  {
    key: "1",
    title: "Agents",
    icon: <UsersIcon className="size-6 text-white" />,
    subtitle: "All the agents you service.",
    href: "/dashboard/agents-portal/agents",
  },
  {
    key: "2",
    title: "Agent Teams",
    icon: <RectangleStackIcon className="size-6 text-white" />,
    subtitle:
      "Brokerages, offices, teams, or other groupings of agents that share pricing and billing settings.",
    href: "/dashboard/agents-portal/agent-teams",
  },
];

const AgentsPortal = () => {
  const navigate = useNavigate();
  const handleCustomerRedirect = (route) => {
    navigate(route);
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Agents Portal</div>
        <div>
          <p>
            Manage your agents and organize them into teams to easily manage
            complex pricing and billing configurations as your business grows.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {customerRedirect.map((item) => {
            return (
              <Card
                key={item.key}
                className="w-full col-span-12 md:col-span-6 lg:col-span-6 bg-white rounded-lg shadow-l"
              >
                <CardHeader className="flex gap-3">
                  <div className="bg-purple-800 p-2 rounded-full">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="flex flex-row gap-4 items-end justify-between p-4">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-row justify-end">
                  <Button
                    color="secondary"
                    onPress={() => handleCustomerRedirect(item.href)}
                  >
                    Check it
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgentsPortal;
