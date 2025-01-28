import { Listbox, ListboxItem } from "@heroui/react";
import {
	UserGroupIcon,
	CalendarIcon,
	ShoppingCartIcon,
	ChartBarIcon,
	BoltIcon,
	RectangleGroupIcon,
	Cog8ToothIcon,
	HomeIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  { key: "listings", label: "Listings", icon: <HomeIcon className="size-4" />, href: "/dashboard" },
  { key: "agents", label: "Agents", icon: <UserGroupIcon className="size-4" />, href: "/dashboard/agents" },
  { key: "calendar", label: "Calendar", icon: <CalendarIcon className="size-4" />, href: "" },
  { key: "store", label: "Store", icon: <ShoppingCartIcon className="size-4" />, href: "" },
  { key: "team", label: "Team", icon: <RectangleGroupIcon className="size-4" />, href: "" },
  { key: "apps", label: "Apps", icon: <BoltIcon className="size-4" />, href: "" },
  { key: "statistics", label: "Statistics", icon: <ChartBarIcon className="size-4" />, href: "" },
  { key: "settings", label: "Settings", icon: <Cog8ToothIcon className="size-4" />, href: "" },
];

const SideNavs = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div>
          <Listbox aria-label="Side Navigation">
            {navItems.map((nav) => {
              return (
                <ListboxItem
                  key={nav.key}
                  startContent={nav.icon}
                  href={nav.href}
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
