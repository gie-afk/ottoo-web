import { Checkbox, Button, Card, CardBody } from "@heroui/react";

const listingPermissions = [
  {
    key: "1",
    label: "View All",
    subLabel:
      "User can view all of the teams listings. If not enabled, the user will only see listings that have any orders with appointments they're assigned to.",
  },
  {
    key: "2",
    label: "Create",
    subLabel: "User can create new listings.",
  },
  {
    key: "3",
    label: "Delete",
    subLabel: "User can delete undelivered listings.",
  },
  {
    key: "4",
    label: "Manage Media Requests",
    subLabel:
      "User can manage media requests from the Showcase agent experience dashboard.",
  },
];

const orderPermissions = [
  {
    key: "1",
    label: "View All",
    subLabel: "User can view all of the teams orders.",
  },
  {
    key: "2",
    label: "View Pricing",
    subLabel: "User can view the total and line item prices for an order.",
  },
  {
    key: "3",
    label: "Manage Orders",
    subLabel: "User can create, edit, and delete orders.",
  },
  {
    key: "4",
    label: "Manage Notes",
    subLabel: "User can edit order notes.",
  },
];
const calendarPermissions = [
  {
    key: "1",
    label: "View All",
    subLabel:
      "User can view the calendar of all team members. If disabled, they will only be able to view their own calendar events.",
  },
];
const storefrontPermissions = [
  {
    key: "1",
    label: "View Order Forms",
    subLabel:
      "User can view the group's order forms and form embed instructions.",
  },
  {
    key: "2",
    label: "View Products",
    subLabel:
      "User can view and manage the group's products, categories and addons.",
  },
  {
    key: "3",
    label: "View Taxes",
    subLabel: "User can view and manage tax settings.",
  },
  {
    key: "4",
    label: "View Fees",
    subLabel: "User can view and manage travel fees.",
  },
  {
    key: "5",
    label: "View Availability",
    subLabel:
      "User can view and manage the availability settings and default calendars for all team members. If disabled, they will only be able to view their own.",
  },
  {
    key: "6",
    label: "Manage Appointments",
    subLabel: "User can manage appointments and appointment settings",
  },
  {
    key: "7",
    label: "View Territories",
    subLabel: "User can view and manage territories.",
  },
];
const customerPermissions = [
  {
    key: "1",
    label: "View All",
    subLabel:
      "User can view all customers and update customer portal settings.",
  },
  {
    key: "2",
    label: "Create",
    subLabel: "User can create new customers.",
  },
  {
    key: "3",
    label: "Delete",
    subLabel: "User can delete customers.",
  },
  {
    key: "4",
    label: "Import Customers",
    subLabel: "User can import new customers.",
  },
  {
    key: "5",
    label: "Export Customers",
    subLabel: "User can export customer list.",
  },
  {
    key: "6",
    label: "Manage Payment Methods",
    subLabel:
      "Allows users to manage and access payment methods for customers.",
  },
];
const reportPermissions = [
  {
    key: "1",
    label: "View All",
    subLabel: "User can view all of the teams reports.",
  },
  {
    key: "2",
    label: "View Activity Log",
    subLabel: "User can view activity logs.",
  },
];
const appStorePermissions = [
  {
    key: "1",
    label: "View All",
    subLabel:
      "User can view all the apps in the Aryeo App Store and manage API tokens.",
  },
];
const settingsPermissions = [
  {
    key: "1",
    label: "Settings",
    subLabel: "User can create, edit, and delete admin level settings.",
  },
];

const MemberPermissions = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <p>Listing Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Listing permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {listingPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>Order Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Order permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {orderPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>Calendar Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Calendar permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {calendarPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>Storefront Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Storefront permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {storefrontPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>Customer Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Customer permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {customerPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>Report Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Report permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {reportPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>App Store Permissions</p>
        <p className="text-sm text-gray-500">
          Select which App Store permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {appStorePermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col">
        <p>Settings Permissions</p>
        <p className="text-sm text-gray-500">
          Select which Settings permissions this team member should have.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {settingsPermissions.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="w-full flex flex-row justify-end">
        <Button color="secondary">Update Permissions</Button>
      </div>
    </div>
  );
};

export default MemberPermissions;
