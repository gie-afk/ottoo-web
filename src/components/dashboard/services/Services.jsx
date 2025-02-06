import { useNavigate } from 'react-router-dom';
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Chip,
  Button
} from "@heroui/react";

const rows = [
  { key: "1", product: "Photos", status: "Active", price: "$100.00"},
  { key: "2", product: "3D Tour", status: "Inactive", price: "$100.00"},
  { key: "3", product: "Drone Photos", status: "Active", price: "$100.00"},
  { key: "4", product: "Real Estate Video", status: "Active", price: "$100.00"},
  { key: "5", product: "Video Package", status: "Inactive", price: "$100.00"},
  { key: "6", product: "3D Package", status: "Inactive", price: "$100.00"},
  { key: "7", product: "Full Package", status: "Active", price: "$100.00"},
];

const columns = [
  { key: "product", label: "PRODUCT INFO"},
  { key: "status", label: "STATUS"},
  { key: "price", label: "PRICE"},
  { key: "menu", label: "MENU"},
];

const Services = () => {
  const navigate = useNavigate();
  const handleAddService = () => {
    navigate("/dashboard/services/add-service");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Your Services</div>
        <div className="flex flex-row justify-end">
          <Button color="secondary" startContent={<PlusIcon className="size-4"/>} onPress={handleAddService}>
            Add Service
          </Button>
        </div>
        <div>
          <Table isStriped aria-label="Services Table">
            <TableHeader columns={columns} align="center">
              {(column) => {
                if (column.key === "menu") {
                  return (
                    <TableColumn key={column.key} className="text-center">{column.label}</TableColumn>
                  )
                }
                return <TableColumn key={column.key}>{column.label}</TableColumn>
              }}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => {
                    if (columnKey === "status"){
                      return (
                        <TableCell>
                          <Chip size="sm" color={item.status === "Active" ? "secondary" : "default"}>{getKeyValue(item, columnKey)}</Chip>
                        </TableCell>
                      )
                    }
                    if (columnKey === "menu"){
                      return (
                        <TableCell className="text-center">
                          <Button color="default" variant="light" startContent={<PencilIcon />}>
                            Edit
                          </Button>
                        </TableCell>
                      )
                    }
                    return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  }}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Services;
