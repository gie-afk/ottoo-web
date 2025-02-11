import {
  ArrowLeftIcon,
  CurrencyDollarIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Form,
  Input,
  Button,
  Textarea,
  Accordion,
  AccordionItem,
} from "@heroui/react";
import { useNavigate } from 'react-router-dom';


const AddService = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">Add Services</p>
      </div>
      <div>
        <Button
          color="default"
          className="w-auto"
          startContent={<ArrowLeftIcon className="size-4" />}
          onPress={() => navigate("/dashboard/services")}
        >
          Back
        </Button>
      </div>
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-sm font-semibold">New Service</p>
            <p className="text-tiny text-gray-500">
              Use this form to create a new service
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-3">
          <p className="font-semibold">Service Details</p>
          <Form className="w-full" onSubmit={onSubmit}>
            <Input
              isRequired
              label="Title"
              labelPlacement="outside"
              name="title"
              placeholder="Title"
              type="text"
            />
            <Textarea
              className="w-full"
              labelPlacement="outside"
              label="Description"
              placeholder="Enter your description"
            />
            <p className="text-sm font-semibold">Pricing</p>
            <Accordion variant="splitted">
              <AccordionItem
                key="1"
                aria-label="Pricing"
                title="Test Title"
                subtitle="$0.00 - 0 mins"
              >
                <div className="w-full grid grid-cols-12 justify-between gap-3">
                  <Input
                    label="Price"
                    labelPlacement="outside"
                    placeholder="0.00"
                    startContent={
                      <CurrencyDollarIcon className="size-6 fill-gray-400" />
                    }
                    type="number"
                    className="col-span-6"
                  />
                  <Input
                    label="Duration"
                    labelPlacement="outside"
                    placeholder="0"
                    endContent={
                      <span className="text-default-400 text-small">mins</span>
                    }
                    type="number"
                    className="col-span-6"
                  />
                </div>
              </AccordionItem>
            </Accordion>
            <Button
              color="default"
              variant="light"
              startContent={<PlusIcon className="size-4" />}
            >
              Add Variant
            </Button>
          </Form>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-row justify-end">
          <Button type="submit" color="secondary">
            Create Service
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddService;
