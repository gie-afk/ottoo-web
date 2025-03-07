import { Button } from "@heroui/react";
const DeleteTeamMember = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <p>
          This action cannot be undone. Once removed, <b>Cody Lindo</b> will no
          longer able to access your account.
        </p>
        <div className="w-full flex flex-row justify-end">
          <Button color="danger">Delete Team Member</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTeamMember;
