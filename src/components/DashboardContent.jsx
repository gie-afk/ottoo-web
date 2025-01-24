import {
  ArrowUpIcon,
  EyeIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Card, CardHeader, CardBody } from "@heroui/react";
import LineChart from "./common/charts/LineChart";
const DashboardContent = () => {
  return (
    <div className="flex flex-col gap-8 overflow-y-auto">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Good day, James!</div>
        <div>Let's make today productive!</div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Card className="w-full col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-lg shadow-l">
          <CardHeader className="flex gap-3">
            <div className="bg-purple-800 p-2 rounded-full">
              <EyeIcon className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row gap-4 items-end justify-between p-4">
              <div>
                <p className="text-2xl font-bold">$3.456K</p>
                <p className="text-sm text-gray-500">Total views</p>
              </div>
              <div className="text-purple-800 flex flex-row items-center">
                <p>0.43% </p>
                <ArrowUpIcon className="size-5" />
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-lg shadow-l">
          <CardHeader className="flex gap-3">
            <div className="bg-purple-800 p-2 rounded-full">
              <ShoppingCartIcon className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row gap-4 items-end justify-between p-4">
              <div>
                <p className="text-2xl font-bold">$45.1K</p>
                <p className="text-sm text-gray-500">Total Profit</p>
              </div>
              <div className="text-purple-800 flex flex-row items-center">
                <p>32.11% </p>
                <ArrowUpIcon className="size-5" />
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-lg shadow-l">
          <CardHeader className="flex gap-3">
            <div className="bg-purple-800 p-2 rounded-full">
              <UsersIcon className="size-6 text-white" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row gap-4 items-end justify-between p-4">
              <div>
                <p className="text-2xl font-bold">$32.1K</p>
                <p className="text-sm text-gray-500">Total Users</p>
              </div>
              <div className="text-purple-800 flex flex-row items-center">
                <p>12.01% </p>
                <ArrowUpIcon className="size-5" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Card className="w-full col-span-12 bg-white rounded-lg shadow-l">
          <CardBody>
            <LineChart />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
