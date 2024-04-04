import {Button} from "@nextui-org/react";

export const LogoutButton = () => {
  return (
    <Button className="bg-blue-500 hover:bg-blue-700 text-white whitespace-nowrap font-bold py-2 px-4">
      <a className="button__logout" href="/api/auth/logout">
        Log Out
      </a>
    </Button>
  );
};