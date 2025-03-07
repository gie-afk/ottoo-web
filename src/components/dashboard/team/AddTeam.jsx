import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Form,
  Input,
  Button,
  Checkbox,
  Tooltip,
} from "@heroui/react";
import { ArrowLeftIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full xl:w-1/2 text-2xl font-bold items-start">
            Add Team Member
          </div>
          <div className="flex flex-row justify-start gap-2 w-full xl:w-1/2">
            <Button
              color="default"
              className="w-auto"
              startContent={<ArrowLeftIcon className="size-4" />}
              onPress={() => navigate("/dashboard/team")}
            >
              Back
            </Button>
          </div>
          <Card className="w-full xl:w-1/2">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Member Information</p>
                <p className="text-tiny text-gray-500">
                  Invite a new person to join your team. Once part of your team,
                  they'll have full access to all of your listings and content.
                  This is great for assistants, marketing admins, or back office
                  staff.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-3">
              <Form className="w-full">
                <Input
                  label="First Name"
                  name="firstName"
                  placeholder="Jane"
                  type="text"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                />
                <Input
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="09123445545"
                  type="number"
                />
                <Input
                  label="Email Address"
                  name="emailAdress"
                  placeholder="janedoe@gmail.com"
                  type="email"
                />
                <Input
                  label="External ID"
                  name="externalId"
                  placeholder="123123"
                  type="number"
                />
                <Input label="Avatar" name="avatar" type="file" />
                <div className="flex flex-row gap-2">
                  <Checkbox color="secondary">
                    <p className="text-sm"> Is Service Provider</p>
                  </Checkbox>
                  <Tooltip 
                    content="Service providers can be assigned to appointments and will have their availability taken into account when calculating available timeslots."
                    showArrow={true}
                    className="max-w-96"
                  >
                    <QuestionMarkCircleIcon className="size-4 text-gray-500 align-middle" />
                  </Tooltip>
                </div>
              </Form>
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-row justify-end">
              <Button color="secondary">Create Team Member</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
