import {Card, CardBody, Button, Spacer} from "@nextui-org/react";
import UserIcon from '../../../public/buttonIcons/user.png';
import BudgetIcon from '../../../public/buttonIcons/budget.png';
import SettingsIcon from '../../../public/buttonIcons/settings.png';
import Image from 'next/image'
import { LogoutButton } from "../buttons/logout-button";
import UserProfileModal from '@/components/modals/UserProfile';
import ModalButton from '@/components/buttons/ModalButton';


function menu() {
  return (
    <Card className="bg-background/60 dark:bg-default-100/50 bg-gray-100 h-full">
      <Spacer y={8}></Spacer>
      <h4 className="font-bold text-large m-auto text-purple-700 font-mono">Menu</h4>
      <Spacer y={4}></Spacer>
      <CardBody className="gap-8 justify-between">
          <ModalButton modal={UserProfileModal}>
            <div className="bg-gradient-to-tr from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 flex justify-center rounded-xl items-center">
              <Image src={ UserIcon } alt="Profile Icon" className="size-4"/>
              <h1 className="text-white mx-1.5"> Profile </h1>
            </div>
          </ModalButton>
        <Button className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg" aria-label="Budget">
          <Image src={ BudgetIcon } alt="Budget Icon" />
          Budget
        </Button>
        <Button className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg" aria-label="Budget">
          <a href="/transactions">Transaction</a>
        </Button>
        <Button color="primary" aria-label="Settings">
          <Image src={ SettingsIcon } alt="Settings Icon" />
          Settings
        </Button>
        <LogoutButton/>
     </CardBody>
    </Card>
  );
}

export default menu;