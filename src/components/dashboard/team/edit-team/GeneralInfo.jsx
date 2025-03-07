import { Form, Input, Button } from "@heroui/react";
const GeneralInfo = () => {
  return (
    <div>
      <Form className="w-full">
        <Input
          label="First Name"
          name="firstName"
          placeholder="Jane"
          type="text"
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          type="text"
        />
        <Input
          label="Phone Number"
          name="phoneNumber"
          placeholder="09123445545"
          type="number"
        />
        <Input
          label="Email Address"
          name="emailAdress"
          placeholder="janedoe@gmail.com"
          type="email"
        />
        <Input
          label="External ID"
          name="externalId"
          placeholder="123123"
          type="number"
        />
        <Input label="Avatar" name="avatar" type="file" />
        <div className="w-full flex flex-row justify-end">
          <Button color="secondary">Create Team Member</Button>
        </div>
      </Form>
    </div>
  );
};

export default GeneralInfo;
