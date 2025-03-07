import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableColumn,
  TableCell,
  getKeyValue,
  Checkbox,
  Button,
  Card,
  CardBody
} from "@heroui/react";

const rows = [
  { key: "1", name: "Appointment Assigned" },
  { key: "2", name: "Appointment Canceled" },
  { key: "3", name: "Appointment Postponed" },
  { key: "4", name: "Appointment Reminder" },
  { key: "5", name: "Appointment Rescheduled" },
  { key: "6", name: "Appointment Scheduled" },
  { key: "7", name: "Appointment Summary" },
  { key: "8", name: "Appointment Unassigned" },
  { key: "9", name: "Customer Team Invitation" },
  { key: "10", name: "Order Payment Processed" },
  { key: "11", name: "Order Received" },
  { key: "12", name: "Team Member Invitation" },
];

const columns = [
  { key: "name", label: "Notificaton" },
  { key: "email", label: "Email" },
  { key: "sms", label: "SMS" },
  { key: "push", label: "Push" },
];

const additionalSettings = [
  {
    key: "1",
    label: "Appointment Canceled",
    subLabel: "Sent when an appointment has been canceled.",
  },
  {
    key: "2",
    label: "Appointment Postponed",
    subLabel: "Sent when an appointment has been postponed..",
  },
  {
    key: "3",
    label: "Appointment Reminder",
    subLabel: "Sent as a reminder for an upcoming appointment.",
  },
  {
    key: "4",
    label: "Appointment Rescheduled",
    subLabel:
      "Sent when an appointment has been rescheduled for a member of your team.",
  },
  {
    key: "5",
    label: "Appointment Scheduled",
    subLabel:
      "Sent when an appointment has been scheduled for a member of your team.",
  },
  {
    key: "6",
    label: "Appointment Summary",
    subLabel:
      "Sent every day to your team members with a list of appointments for the day.",
  },
  {
    key: "7",
    label: "Order Payment Processed",
    subLabel: "Sent when a payment is processed for an order.",
  },
  {
    key: "8",
    label: "Order Received",
    subLabel: "Sent when a new order has been placed in your account.",
  },
];

const NotificationSettings = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <p>Notification Preferences</p>
        <p className="text-sm text-gray-500">
          Select which channels the team member will receive notifications on.
          These settings are also configurable by the team member.
        </p>
      </div>
      <Table isStriped aria-label="Services Table">
        <TableHeader columns={columns} align="center">
          {(column) => {
            if (column.key !== "name") {
              return (
                <TableColumn key={column.key} className="text-center">
                  {column.label}
                </TableColumn>
              );
            }
            return <TableColumn key={column.key}>{column.label}</TableColumn>;
          }}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => {
                if (columnKey !== "name") {
                  return (
                    <TableCell className="text-center">
                      <Checkbox color="secondary" />
                    </TableCell>
                  );
                }
                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex flex-col">
        <p>Additional Recipient Settings</p>
        <p className="text-sm text-gray-500">
          Select which notifications this team member should be added to when
          these notifications are sent to your team.
        </p>
      </div>
      <div>
        <Card>
          <CardBody className="gap-4">
            {additionalSettings.map((setting) => (
              <div key={setting.key} className="flex flex-row">
                <div>
                  <Checkbox color="secondary" />
                </div>
                <div>
                  <p>{setting.label}</p>
                  <p className=" text-sm text-gray-500">{setting.subLabel}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="w-full flex flex-row justify-end">
        <Button color="secondary">Update Notification Settings</Button>
      </div>
    </div>
  );
};

export default NotificationSettings;
