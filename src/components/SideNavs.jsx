import { Button, Divider, Listbox, ListboxItem } from "@heroui/react";
import {
	CalendarIcon,
	ClockIcon,
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	ListBulletIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	UserGroupIcon,
	PencilIcon,
	ChartBarIcon,
	BoltIcon,
	RectangleGroupIcon,
	Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const SideNavs = () => {
	return (
		<div>
			<div className="flex flex-col gap-2 w-full">
				<Button className="w-full" color="secondary">
					Create Listing
				</Button>
				<Button className="w-full" color="default">
					Create Order
				</Button>
			</div>
			<Divider className="my-4" />
			<div className="flex flex-col gap-4">
				<div>
					<Listbox aria-label="Dashboard" onAction={(key) => alert(key)}>
						<ListboxItem
							key="dashboard"
							startContent={<ComputerDesktopIcon className="size-4" />}
						>
							Dashboard
						</ListboxItem>
					</Listbox>
				</div>
				<div>
					<span className="text-purple-800 font-bold">General</span>
					<Listbox aria-label="General" onAction={(key) => alert(key)}>
						<ListboxItem
							key="listing"
							startContent={<ListBulletIcon className="size-4" />}
						>
							Listing
						</ListboxItem>
						<ListboxItem
							startContent={<ShoppingBagIcon className="size-4" />}
							key="orders"
						>
							Orders
						</ListboxItem>
						<ListboxItem
							startContent={<CalendarIcon className="size-4" />}
							key="calendar"
						>
							Calendar
						</ListboxItem>
						<ListboxItem
							startContent={<UserGroupIcon className="size-4" />}
							key="customers"
						>
							Customers
						</ListboxItem>
					</Listbox>
				</div>
				<div>
					<span className="text-purple-800 font-bold">Storefront</span>
					<Listbox aria-label="Storefront" onAction={(key) => alert(key)}>
						<ListboxItem
							key="products"
							startContent={<ShoppingCartIcon className="size-4" />}
						>
							Products
						</ListboxItem>
						<ListboxItem
							startContent={<ClockIcon className="size-4" />}
							key="availability"
						>
							Availability
						</ListboxItem>
						<ListboxItem
							startContent={<PencilIcon className="size-4" />}
							key="orderForms"
						>
							Order Forms
						</ListboxItem>
						<ListboxItem
							startContent={<DevicePhoneMobileIcon className="size-4" />}
							key="customerPortal"
						>
							Customer Portal
						</ListboxItem>
					</Listbox>
				</div>
				<div>
					<span className="text-purple-800 font-bold">More</span>
					<Listbox aria-label="More" onAction={(key) => alert(key)}>
						<ListboxItem
							key="reports"
							startContent={<ChartBarIcon className="size-4" />}
						>
							Reports
						</ListboxItem>
						<ListboxItem
							startContent={<BoltIcon className="size-4" />}
							key="appStore"
						>
							App Store
						</ListboxItem>
						<ListboxItem
							startContent={<RectangleGroupIcon className="size-4" />}
							key="team"
						>
							Team
						</ListboxItem>
						<ListboxItem
							startContent={<Cog8ToothIcon className="size-4" />}
							key="settings"
						>
							Settings
						</ListboxItem>
					</Listbox>
				</div>
			</div>
		</div>
	);
};

export default SideNavs;
