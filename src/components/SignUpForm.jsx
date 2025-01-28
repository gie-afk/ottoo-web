import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { ArrowLongLeftIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import logo from "../assets/icons/logo.jfif";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleDashboardRedirect = () => {
    navigate("/dashboard");
  };
  return (
    <div className="container">
      <Card className="w-full bg-white p-4 rounded-lg shadow-xl">
        <CardHeader>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={logo} alt="logo" className="size-16" />
              </div>
              <div>
                <span className="text-2xl font-bold">Sign Up for Ottoo</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-base">
                Enter the information below to help us scaffold your account.
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-12 gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="col-span-12 md:col-span-6 lg:col-span-6 text-right flex justify-between items-center h-14"
                  color="default"
                  variant="flat"
                  endContent={<ChevronDownIcon className="size-4" />}
                >
                  Please select role
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Dropdown Variants"
                color="default"
                variant="flat"
                className="col-span-6"
              >
                <DropdownItem key="photographer" className="w-full">
                  Photographer
                </DropdownItem>
                <DropdownItem key="agent" className="col-span-6">
                  Real Estate Agent
                </DropdownItem>
                <DropdownItem key="edit" className="col-span-6">
                  Edit file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="Company Name"
              type="text"
            />
            <Input
              isRequired
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="First Name"
              type="text"
            />
            <Input
              isRequired
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="Last Name"
              type="text"
            />
            <Input
              isRequired
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="Phone Number"
              type="text"
            />
            <Input
              isRequired
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="Email"
              type="email"
            />
            <Input
              isRequired
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="Password"
              type="password"
            />
            <Input
              isRequired
              className="col-span-12 md:col-span-6 lg:col-span-6"
              label="Confirm Password"
              type="password"
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col-reverse md:flex-row md:justify-center lg:flex-row lg:justify-between gap-4">
          <div className="w-full text-center">
            <Link href="/" color="foreground" underline="hover">
              <ArrowLongLeftIcon className="size-4" />
              <span>Go back to Login</span>
            </Link>
          </div>
          <div className="w-full">
            <Button
              onPress={handleDashboardRedirect}
              className="w-full"
              color="secondary"
            >
              Create Account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
