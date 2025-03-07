import React, { useState } from 'react';
import { Listbox, ListboxItem, Button, Divider} from "@heroui/react";
import {
	UserGroupIcon,
	CalendarIcon,
	ShoppingCartIcon,
	ChartBarIcon,
	BoltIcon,
	RectangleGroupIcon,
	Cog8ToothIcon,
	HomeIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  { key: "listings", label: "Listings", icon: <HomeIcon className="size-4" />, href: "/dashboard" },
  { key: "agents", label: "Agents", icon: <UserGroupIcon className="size-4" />, href: "/dashboard/agents-portal" },
  { key: "calendar", label: "Calendar", icon: <CalendarIcon className="size-4" />, href: "" },
  { key: "services", label: "Services", icon: <ShoppingCartIcon className="size-4" />, href: "/dashboard/services" },
  { key: "team", label: "Team", icon: <RectangleGroupIcon className="size-4" />, href: "/dashboard/team" },
  { key: "apps", label: "Apps", icon: <BoltIcon className="size-4" />, href: "" },
  { key: "statistics", label: "Statistics", icon: <ChartBarIcon className="size-4" />, href: "" },
  { key: "settings", label: "Settings", icon: <Cog8ToothIcon className="size-4" />, href: "/dashboard/settings" },
];

const SideNavs = () => {
  const [activeKey, setActiveKey] = useState(navItems[0].key);
  const handleNavClick = (key) => {
    setActiveKey(key);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div>
          <Button
            color="default"
            startContent={<PlusIcon className="size-4" />}
            className="w-full"
          >
            Create Order
          </Button>
        </div>
        <Divider />
        <div>
          <Listbox shouldHighlightOnFocus={false} aria-label="Side Navigation">
            {navItems.map((nav) => {
              return (
                <ListboxItem
                  key={nav.key}
                  startContent={nav.icon}
                  href={nav.href}
                  onPress={() => handleNavClick(nav.key)}
                  className={
                    activeKey === nav.key ? "bg-purple-800 text-white" : ""
                  }
                >
                  {nav.label}
                </ListboxItem>
              );
            })}
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default SideNavs;
