import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  ArrowRightIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Chip, Divider } from "@heroui/react";

const statisticsCards = [
  { key: "orders", label: "Orders this month", value: "58 orders", icon: <ArchiveBoxIcon className="size-6 text-white" /> },
  { key: "monthly-profit", label: "Monthly profit", value: "$4,000", icon: <CurrencyDollarIcon className="size-6 text-white" /> },
  { key: "yearly-profit", label: "Yearly profit", value: "$32,000", icon: <CurrencyDollarIcon className="size-6 text-white" /> },
  { key: "unpaid", label: "Number of unpaid orders", value: "6 orders", icon: <ArchiveBoxXMarkIcon className="size-6 text-white" /> },
]

const upcomingJobs = [
  { key: "1", date: "Jan 1, 2025 8AM", location: "123456 Blue St. Los Angeles"},
  { key: "2", date: "Jan 1, 2025 12PM", location: "123456 Red St. Chico"},
]

const listings = [
  { key: "1", street: "1991 Muscovy Rd", location: "West Sacracmento, CA 123123", name: "Lisa Dove", email: "lisadove@gmail.com", orderNumber: "Order#1", cost:"$200.00"},
  { key: "2", street: "1991 Muscovy Rd", location: "West Sacracmento, CA 123123", name: "Lisa Dove", email: "lisadove@gmail.com", orderNumber: "Order#2", cost:"$200.00"},
  { key: "3", street: "1991 Muscovy Rd", location: "West Sacracmento, CA 123123", name: "Lisa Dove", email: "lisadove@gmail.com", orderNumber: "Order#3", cost:"$200.00"},
]
const Listings = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Statistics */}
      <div className="flex flex-col">
        <p className="text-2xl font-bold">Good day, James!</p>
        <p className="text-sm">Let's make today productive! Keep going!</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-l font-bold">Statistics</p>
          <Button
            color="default"
            variant="flat"
            endContent={<ArrowRightIcon className="size-4" />}
          >
            More Statistics
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {statisticsCards.map((card) => {
            return (
              <Card key={card.key} className="w-full col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-white rounded-lg shadow-l">
                <CardHeader className="flex gap-3">
                  <div className="bg-purple-800 p-2 rounded-full">
                    {card.icon}
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-row gap-4 items-end justify-between p-4">
                    <div>
                      <p className="text-2xl font-bold">{card.value}</p>
                      <p className="text-sm text-gray-500">{card.label}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Upcoming Jobs */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-l font-bold">Upcoming Jobs</p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {upcomingJobs.map((job) => {
            return (
              <Card key={job.key} className="w-full col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 bg-white rounded-lg shadow-l">
                <CardHeader className="flex gap-3">
                  <div className="bg-purple-800 p-2 rounded-full">
                    <CalendarIcon className="size-6 text-white"/>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-row gap-4 items-end justify-between p-4">
                    <div>
                      <p className="text-md font-semibold">{job.location}</p>
                      <p className="text-sm text-gray-500">{job.date}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Listings */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-l font-bold">Listings</p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {
            listings.map((item) => {
              return (
                <Card key={item.key} isFooterBlurred className="w-full col-span-12 md:col-span-6 lg:col-span-4 bg-white shadow-xl">
                  <CardHeader className="absolute z-50 top-1 flex-row gap-1 items-start px-1 py-0">
                    <Chip size="sm" color="success">Delivered</Chip>
                    <Chip size="sm" color="success">Paid</Chip>
                  </CardHeader>
                  <CardBody className="h-[200px] p-0">
                    <Image
                      removeWrapper
                      alt="background image"
                      className="w-full h-full object-cover rounded-none"
                      src="https://heroui.com/images/card-example-3.jpeg"
                    />
                  </CardBody>
                  <CardFooter className="opacity-100 bg-white">
                    <div className="flex flex-col flex-grow gap-2">
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">{item.street}</p>
                        <p className="text-sm">{item.location}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-sm">{item.email}</p>
                      </div>
                      <Divider />
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm">{item.orderNumber}</p>
                        <p className="text-sm">{item.cost}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              );
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Listings;
