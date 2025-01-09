import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Input, Button, Link} from "@nextui-org/react";
import logo from "../assets/icons/logo.jfif"

export default function Login() {
  return (
    <div className="container">
      <Card className="w-full bg-white p-4 rounded-lg shadow-xl">
        <CardHeader>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={logo} alt="logo" className="size-16"/>
              </div>
              <div>
                <span className="text-2xl font-bold">Sign in to Ottoo</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-base">
                Let's start with your email address to see if you have an account.
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Input
            isRequired
            className="w-100"
            label="Email"
            type="email"
            placeholder="Please enter your email"
          />
        </CardBody>
        <CardFooter className="flex justify-between">
          <div>
            <Link href="#" color="foreground" underline="hover">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
              <span>
                Go back to Ottoo.com
              </span>
            </Link> 
          </div>
          <div>
            <Button color="secondary">Check Email</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

