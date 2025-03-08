import {
  PencilIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  TrashIcon,
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
  Pagination
} from "@heroui/react";

const rows = [
  { key: "1", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
  { key: "2", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
  { key: "3", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
  { key: "4", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
  { key: "5", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
  { key: "6", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
  { key: "7", name: "Abril Carrasco", email: "carrasco@gmail.com", number: "12334234234", listings: "$100.00", order: "1", teams: "2", creditBalance: "$100.00", accountBalance:"$5.00", created: "2025-02-08" },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "number", label: "Phone Number" },
  { key: "listings", label: "Listings" },
  { key: "order", label: "Order" },
  { key: "teams", label: "Teams" },
  { key: "creditBalance", label: "Credit Balance" },
  { key: "accountBalance", label: "Account Balance" },
  { key: "created", label: "Created" },
  { key: "menu", label: "Menu" },
];

const Agents = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Agents</div>
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
            <CardBody className="flex flex-row gap-2">
              <Input
                clearable
                placeholder="Search"
                endContent={<MagnifyingGlassIcon className="size-6" />}
                className="w-full md:w-3/4 lg:w-3/4 xl:w-1/2"
              />
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

export default Agents;
