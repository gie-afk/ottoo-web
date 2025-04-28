import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
  ArrowUpIcon
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Chip
} from "@heroui/react";
import LineChart from "../../common/charts/LineChart"

const statisticsCards = [
  {
    key: "orders",
    label: "Orders this month",
    value: "58 orders",
    icon: <ArchiveBoxIcon className="size-6 text-white" />,
  },
  {
    key: "monthly-profit",
    label: "Monthly profit",
    value: "$4,000",
    icon: <CurrencyDollarIcon className="size-6 text-white" />,
  },
  {
    key: "yearly-profit",
    label: "Yearly profit",
    value: "$32,000",
    icon: <CurrencyDollarIcon className="size-6 text-white" />,
  },
  {
    key: "unpaid",
    label: "Number of unpaid orders",
    value: "6 orders",
    icon: <ArchiveBoxXMarkIcon className="size-6 text-white" />,
  },
];
const rows = [
  {
    key: "1",
    name: "Abril Carrasco",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "2",
    name: "Jane Doe",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "3",
    name: "Rosa Gibson",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "4",
    name: "Honorina Perkovic",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "5",
    name: "Godeliva Dam",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "6",
    name: "Heng Tash",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "7",
    name: "Pauline Luna",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "8",
    name: "Segourney Morello",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "9",
    name: "Lyssa Blumenthal",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
  {
    key: "10",
    name: "Shelly Dumbledore",
    status: "Active",
    orders: "20",
    spent: "$213,000",
    created: "2025-02-08",
    affiliatedId: "1231232",
  },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "orders", label: "Orders" },
  { key: "spent", label: "Spent" },
  { key: "created", label: "Created" },
  { key: "affiliatedId", label: "Affiliated ID" },
];
const Statistics = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Statistics */}
      <div className="flex flex-col">
        <p className="text-2xl font-bold">Statistics</p>
      </div>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-l font-bold">Total Revenue</p>
          <p className="text-xl text-secondary font-bold">$23,234,343</p>
          <p className="text-success flex flex-row items-center">
            <ArrowUpIcon className="size-4"/>
            $12,000
          </p>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-3"
              color="default"
              variant="flat"
              endContent={<ChevronDownIcon className="size-4" />}
            >
              Filter By
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dropdown Variants"
            color="default"
            variant="flat"
            className="col-span-6"
          >
            <DropdownItem key="lastYear" className="w-full">
              Last year
            </DropdownItem>
            <DropdownItem key="thisYear" className="col-span-6">
              This year
            </DropdownItem>
            <DropdownItem key="lastSixMonths" className="col-span-6">
              Last 6 Months
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <LineChart />
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-12 gap-4">
          {statisticsCards.map((card) => {
            return (
              <Card
                key={card.key}
                className="w-full col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-white rounded-lg shadow-l"
              >
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
      <div className="flex flex-row justify-between items-center">
        <p className="text-l font-bold">Top Clients</p>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-3"
              color="default"
              variant="flat"
              endContent={<ChevronDownIcon className="size-4" />}
            >
              Filter By
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dropdown Variants"
            color="default"
            variant="flat"
            className="col-span-6"
          >
            <DropdownItem key="any" className="w-full">
              Most Spent
            </DropdownItem>
            <DropdownItem key="active" className="col-span-6">
              Orders
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <Table isStriped aria-label="Services Table">
          <TableHeader columns={columns} align="center">
            {(column) => {
              if (column.key === "menu") {
                return (
                  <TableColumn key={column.key} className="text-center">
                    {column.label}
                  </TableColumn>
                );
              }
              return <TableColumn key={column.key}>{column.label}</TableColumn>;
            }}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => {
                  if (columnKey === "menu") {
                    return (
                      <TableCell className="text-center">
                        <Button isIconOnly color="default" variant="light">
                          <PencilIcon className="size-4" />
                        </Button>
                        <Button isIconOnly color="default" variant="light">
                          <TrashIcon className="size-4" />
                        </Button>
                      </TableCell>
                    );
                  }
                  if (columnKey === "status") {
                    return (
                      <TableCell>
                        <Chip
                          size="sm"
                          color={
                            item.status === "Active" ? "secondary" : "default"
                          }
                        >
                          {getKeyValue(item, columnKey)}
                        </Chip>
                      </TableCell>
                    );
                  }
                  return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Statistics;
