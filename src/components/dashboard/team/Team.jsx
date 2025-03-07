import {
  PencilIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  PlusIcon,
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
  Chip,
} from "@heroui/react";

const rows = [
  {
    key: "1",
    name: "Abril Carrasco",
    role: "Owner",
    status: "Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
  {
    key: "2",
    name: "Cody Lindo",
    role: "Member",
    status: "Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
  {
    key: "3",
    name: "Isabel Sweet",
    role: "Member",
    status: "Not Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
  {
    key: "4",
    name: "Merle Loewen",
    role: "Member",
    status: "Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
  {
    key: "5",
    name: "Abril Carrasco",
    role: "Member",
    status: "Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
  {
    key: "6",
    name: "Abril Carrasco",
    role: "Member",
    status: "Not Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
  {
    key: "7",
    name: "Abril Carrasco",
    role: "Member",
    status: "Active",
    serviceProvider: "Yes",
    created: "2025-02-08",
  },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
  { key: "serviceProvider", label: "Is Service Provider?" },
  { key: "created", label: "Created" },
  { key: "menu", label: "Menu" },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Team Members</div>
        <div className="flex flex-row justify-end gap-2">
          <Button
            color="secondary"
            className="w-auto"
            startContent={<PlusIcon className="size-4" />}
            onPress={() => navigate("/dashboard/team/add-team")}
          >
            Add Team Member
          </Button>
        </div>
        <div>
          <Card>
            <CardBody className="grid grid-cols-12 flex-row gap-2">
              <Input
                clearable
                placeholder="Search Team Members..."
                endContent={<MagnifyingGlassIcon className="size-6" />}
                className="w-full col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-3"
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
                    color="default"
                    variant="flat"
                    endContent={<ChevronDownIcon className="size-4" />}
                  >
                    Role
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
                  <DropdownItem key="member" className="col-span-6">
                    Member
                  </DropdownItem>
                  <DropdownItem key="owner" className="col-span-6">
                    Owner
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
                    color="default"
                    variant="flat"
                    endContent={<ChevronDownIcon className="size-4" />}
                  >
                    Status
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
                  <DropdownItem key="invited" className="col-span-6">
                    Invited
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="text-right flex justify-between items-center col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
                    color="default"
                    variant="flat"
                    endContent={<ChevronDownIcon className="size-4" />}
                  >
                    Is Service Provider
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dropdown Variants"
                  color="default"
                  variant="flat"
                  className="col-span-6"
                >
                  <DropdownItem key="any" className="w-full">
                    Any
                  </DropdownItem>
                  <DropdownItem key="yes" className="col-span-6">
                    Yes
                  </DropdownItem>
                  <DropdownItem key="no" className="col-span-6">
                    No
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
          <Table isStriped aria-label="Team Table">
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
                        <TableCell className="text-center gap-2">
                          <Button
                            color="default"
                            variant="light"
                            startContent={<PencilIcon />}
                            onPress={() =>
                              navigate("/dashboard/team/edit-team")
                            }
                          >
                            Edit
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
          <Pagination
            showControls
            initialPage={1}
            total={10}
            variant="bordered"
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
