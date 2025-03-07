import { Button } from "@heroui/react";
const DeleteTeamMember = () => {
  return (
    <div>
      <div className="w-full">
        <p>
          This action cannot be undone. Once removed, <b>Cody Lindo</b> will no
          longer able to access your account.
        </p>
        <div className="w-full flex flex-row justify-end">
          <Button color="danger">Update Permissions</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTeamMember;
