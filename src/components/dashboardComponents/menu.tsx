import {Card, CardHeader, CardBody, Button, CardFooter} from "@nextui-org/react";
import UserIcon from '../../../public/buttonIcons/user.png';
import BudgetIcon from '../../../public/buttonIcons/budget.png';
import SettingsIcon from '../../../public/buttonIcons/settings.png';
import Image from 'next/image'


// action plan
// making sure card is 5% away from the left side of the screen with a margin
// make sure that the card is centered in the viewport
// make sure that the buttons and title are spaced out by 5%
// adding title DONE
// making the card blurry DONE
// making the card background purple DONE
// adding the user button with an icon (purple) DONE
// budget button with icon (gradient) DONE
// setting button wih the icon (blue) DONE

function menu() {
  return (
    <Card
      isBlurred
      isHoverable
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] bg-gray-100">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large m-auto text-purple-700 font-mono">Menu</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Button color="secondary">
          <Image src={ UserIcon } alt="User Icon" />
          Profile
        </Button>
        <Button className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg">
          <Image src={ BudgetIcon } alt="User Icon" />
          Budget
        </Button>
        <Button color="primary">
          <Image src={ SettingsIcon } alt="User Icon" />
          Settings
        </Button>
     </CardBody>
    </Card>
  );
}


export default menu;