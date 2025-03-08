import {
  PencilIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Input,
  Card,
  CardBody,
  CardFooter,
  Pagination,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip
} from "@heroui/react";

const rows = [
  { key: "1", name: "Abril Carrasco", status: "Active", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
  { key: "2", name: "Abril Carrasco", status: "Inactive", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
  { key: "3", name: "Abril Carrasco", status: "Active", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
  { key: "4", name: "Abril Carrasco", status: "Active", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
  { key: "5", name: "Abril Carrasco", status: "Inactive", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
  { key: "6", name: "Abril Carrasco", status: "Active", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
  { key: "7", name: "Abril Carrasco", status: "Active", listings: "2", orders: "1", members: "2", admins: "1", created: "2025-02-08", affiliatedId: "1231232" },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "listings", label: "Listings" },
  { key: "orders", label: "Orders" },
  { key: "members", label: "Members" },
  { key: "admins", label: "Admins" },
  { key: "created", label: "Created" },
  { key: "affiliatedId", label: "Affiliated ID" },

];

const AgentTeams = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Agent Teams</div>
        <div>
          <Button
            color="default"
            className="w-auto"
            startContent={<ArrowLeftIcon className="size-4" />}
            onPress={() => navigate("/dashboard/agents-portal")}
          >
            Back
          </Button>
        </div>
        <div>
          <Card>
            <CardBody className="grid grid-cols-12 flex-row gap-2">
              <Input
                clearable
                placeholder="Search"
                endContent={<MagnifyingGlassIcon className="size-6" />}
                className="w-full col-span-12 md:col-span-12 lg:col-span-6"
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-3"
                    color="default"
                    variant="flat"
                    endContent={<ChevronDownIcon className="size-4" />}
                  >
                    Team Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dropdown Variants"
                  color="default"
                  variant="flat"
                  className="col-span-6"
                >
                  <DropdownItem key="any" className="w-full">
                    Any Status
                  </DropdownItem>
                  <DropdownItem key="active" className="col-span-6">
                    Active
                  </DropdownItem>
                  <DropdownItem key="archived" className="col-span-6">
                    Archived
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-3"
                    color="default"
                    variant="flat"
                    endContent={<ChevronDownIcon className="size-4" />}
                  >
                    Created By
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dropdown Variants"
                  color="default"
                  variant="flat"
                  className="col-span-6"
                >
                  <DropdownItem key="any" className="w-full">
                    Any Status
                  </DropdownItem>
                  <DropdownItem key="active" className="col-span-6">
                    Active
                  </DropdownItem>
                  <DropdownItem key="archived" className="col-span-6">
                    Archived
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardBody>
            <CardFooter className="flex flex-row gap-2">
              <Button color="secondary" className="w-auto">
                Search
              </Button>
              <Button color="default">Reset Filters</Button>
            </CardFooter>
          </Card>
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
                return (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                );
              }}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => {
                    if (columnKey === "menu") {
                      return (
                        <TableCell className="text-center">
                          <Button
                            isIconOnly 
                            color="default"
                            variant="light"
                          >
                            <PencilIcon className="size-4"/>
                          </Button>
                          <Button
                            isIconOnly 
                            color="default"
                            variant="light"
                          >
                            <TrashIcon className="size-4"/>
                          </Button>
                        </TableCell>
                      );
                    }
                    if (columnKey === "status"){
                      return (
                        <TableCell>
                          <Chip size="sm" color={item.status === "Active" ? "secondary" : "default"}>{getKeyValue(item, columnKey)}</Chip>
                        </TableCell>
                      )
                    }
                    return (
                      <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                    );
                  }}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center">
          <Pagination showControls initialPage={1} total={10} variant="bordered" color="secondary"/>
        </div>
      </div>
    </div>
  );
};

export default AgentTeams;
