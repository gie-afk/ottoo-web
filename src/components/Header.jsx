import React from 'react';
import {
  Input, 
  Button, 
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from "@heroui/react";

const Header = () => {
    return (
      <div className="grid grid-cols-12 h-14 shadow-xl">
        <div className="col-span-2 flex items-center justify-left px-4 bg-gray-100">
          <Dropdown>
            <DropdownTrigger>
              <Button 
                className="w-full text-right flex justify-between items-center" 
                color="default" 
                variant="flat"
                endContent= {
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                }
              >
                Company 1
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dropdown Variants" color="default" variant="flat" className="col-span-6">
              <DropdownItem key="companyOne" className="w-full">Company 1</DropdownItem>
              <DropdownItem key="companyTwo" className="col-span-6">Company 2</DropdownItem>
              <DropdownItem key="companyThree" className="col-span-6">Company 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-span-6 flex items-center px-4">
          <Input
            clearable
            placeholder="Search"
            endContent={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            }
            className="w-1/2"
          />
        </div>
        <div className="col-span-4 flex items-center justify-end gap-3 px-4">
          <span>James Doe</span>
          <Avatar radius="lg" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </div>
      </div>
    );
};

export default Header;