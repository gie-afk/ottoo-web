import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Form,
  Input,
  Button,
  Alert,
} from "@heroui/react";

const Settings = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full xl:w-1/2 text-2xl font-bold items-start">Settings</div>
          <Card className="w-full xl:w-1/2">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-sm font-semibold">User Information</p>
                <p className="text-tiny text-gray-500">
                  Update your personal user details here.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-3">
              <Alert color="primary" title="This email and phone number will be used for notifications sent to you." />
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
                <Input label="Avatar" name="avatar" type="file" />
              </Form>
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-row justify-end">
              <Button color="secondary">Update User Details</Button>
            </CardFooter>
          </Card>
          <Card className="w-full xl:w-1/2">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Reset Password</p>
                <p className="text-tiny text-gray-500">
                  Use the form below to update your password.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-3">
              <Form className="w-full">
                <Input
                  label="New Password"
                  name="newPassword "
                  type="password"
                />
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
              </Form>
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-row justify-end">
              <Button color="secondary">Update Password</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
