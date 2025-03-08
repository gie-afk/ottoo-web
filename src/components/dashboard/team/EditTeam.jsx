import { Button, Accordion, AccordionItem } from "@heroui/react";
import { ArrowLeftIcon, BellAlertIcon, IdentificationIcon, LockOpenIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import GeneralInfo from "./edit-team/GeneralInfo";
import NotificationSettings from "./edit-team/NotificationSettings";
import MemberPermissions from "./edit-team/MemberPermissions";
import DeleteTeamMember from "./edit-team/DeleteTeamMember";

const EditTeam = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full xl:w-3/4 text-2xl font-bold items-start">
            Edit Team Member
          </div>
          <div className="flex flex-row justify-start gap-2 w-full xl:w-3/4">
            <Button
              color="default"
              className="w-auto"
              startContent={<ArrowLeftIcon className="size-4" />}
              onPress={() => navigate("/dashboard/team")}
            >
              Back
            </Button>
          </div>
          <div className="w-full xl:w-3/4">
            <Accordion variant="splitted">
              <AccordionItem
                key="1"
                aria-label="General Information"
                title="General Information"
                subtitle="Update basic details about this customer such as their name, email and phone number."
                startContent={<IdentificationIcon className="size-6 text-purple-800" />}
              >
                <GeneralInfo />
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Notification Settings"
                title="Notification Settings"
                subtitle="Configure which channels the team member should receive notifications on."
                startContent={<BellAlertIcon className="size-6 text-purple-800" />}
              >
                <NotificationSettings />
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Member Permissions"
                title="Member Permissions"
                subtitle="Choose which actions this team member is able to take"
                startContent={<LockOpenIcon className="size-6 text-purple-800" />}
              >
                <MemberPermissions />
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Delete Team Member"
                title="Delete Team Member"
                subtitle="Remove from you account. They will no longer be able to access any of your listings or content."
                startContent={<TrashIcon className="size-6 text-purple-800" />}
              >
                <DeleteTeamMember />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeam;
