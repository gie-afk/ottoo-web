import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/icons/logo.jfif";
import { Input, Avatar, Button, Tooltip } from "@heroui/react";
import {
  ArrowLeftIcon,
  Bars2Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Header = ({ toggleNav, isNavVisible }) => {
  return (
    <div className="grid grid-cols-12 h-14 shadow-xl bg-white">
      <div className="md:hidden lg:hidden col-span-2 flex items-center justify-center px-2 md:px-4 lg:px-4 bg-purple-800">
        <Button
          isIconOnly
          aria-label="Show Navigation"
          className="bg-purple-800"
          onPress={toggleNav}
        >
          {isNavVisible ? (
            <ArrowLeftIcon
              className="size-6 transition delay-150 duration-300 ease-in-out"
              color="white"
            />
          ) : (
            <Bars2Icon
              className="size-6 transition delay-150 duration-300 ease-in-out"
              color="white"
            />
          )}
        </Button>
      </div>
      <div className="col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2 flex flex-shrink items-center justify-left px-0 md:px-4 lg:px-4">
        <div className="flex flex-row items-center gap-1 md:gap-2 lg:gap-2">
          <img src={logo} alt="logo" className="size-14" />
          <span className="hidden md:block lg:block md:text-2xl font-bold">
            Ottoo
          </span>
        </div>
      </div>
      <div className="col-span-4 md:col-span-5 lg:col-span-6 xl:col-span-6 flex flex-grow-1 items-center px-0 md:px-4 lg:px-4">
        <Input
          clearable
          placeholder="Search"
          endContent={<MagnifyingGlassIcon className="size-6" />}
          className="w-full lg:w-3/4"
        />
      </div>
      <div className="col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-4 flex items-center justify-end gap-3 px-2 md:px-4 lg:px-4">
        <Tooltip content="Notifications">
          <Button isIconOnly aria-label="Notifications">
            <BellIcon className="size-6" />
          </Button>
        </Tooltip>
        <span className="hidden md:block lg:block">James Doe</span>
        <Avatar
          radius="lg"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </div>
    </div>
  );
};
Header.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  isNavVisible: PropTypes.bool.isRequired,
};

export default Header;
