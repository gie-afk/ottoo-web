import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  Link,
} from "@heroui/react";
import { Divider } from "@heroui/divider";

import logo from "../assets/icons/logo.jfif";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data)
    try {
      const response = await api.post('/token/', data);
      console.log(response)
    } catch (error) {
      console.log("error", error)
    } finally {
      console.log()
    }
    // const responseData = async() => {
    //   try {
        
    //     console.log("response", response)
    //     if (response?.status == 200) {
    //       navigate("/dashboard");
    //     }
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
    // console.log(responseData)
    
    
  };
  const handleSignUpRedirect = () => { };

  return (
    <div className="container">
      <Form className="w-full justify-center items-center space-y-4" onSubmit={onSubmit}>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center">
            <Alert
              key="solid"
              color="danger"
              title="This is a solid variant"
              variant="solid"
            />
          </div>
        </div>
        <Card className="w-full bg-white p-4 rounded-lg shadow-xl">
          <CardHeader>
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <img src={logo} alt="logo" className="size-16" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Sign in to Ottoo</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-12 gap-4">
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                isInvalid={true}
                className="col-span-12 md:col-span-12 lg:col-span-12"
                label="Email"
                name="email"
                value={email}
                placeholder="Enter your email"
                type="email"
                onValueChange={setEmail}
              />
              <Input
                isRequired
                className="col-span-12 md:col-span-12 lg:col-span-12"
                errorMessage="Incorrect password."
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onValueChange={setPassword}
              />
            </div>
          </CardBody>
          <CardFooter className="flex flex-col-reverse md:flex-row md:justify-center lg:flex-row lg:justify-between">
            <div className="w-full text-center">
              <Button type="submit" color="secondary" className="w-full">
                Sign In
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
};

export default LoginForm;
