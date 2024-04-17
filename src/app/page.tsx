import NavBar from "./NavBar"
import Image from 'next/image'
import CatGif from '../../public/animations/IdleAnimation.gif'
import Carousel from '@/components/dashboardComponents/carousel';
import Background from '../../public/OtherForestPixelArt.png';
import {Card} from '@nextui-org/react';

//var budgets: Budget[] = [];
var budgets = [
  {
    id: BigInt("1"),
    created_at: new Date('2024-04-06T10:36:01.516Z'),
    name: "Groceries",
    target: 100,
    user: BigInt("6"),
    spent: 20,
  },
  {
    id: BigInt("2"),
    created_at: new Date('2024-04-07T10:36:01.516Z'),
    name: "Rent",
    target: 500,
    user: BigInt("4"),
    spent: 240,
  },
  {
    id: BigInt("7"),
    created_at: new Date('2024-04-07T10:36:01.516Z'),
    name: "Eating Out",
    target: 40,
    user: BigInt("4"),
    spent: 40,
  },
  {
    id: BigInt("16"),
    created_at: new Date('2024-04-07T10:36:01.516Z'),
    name: "Gas",
    target: 30,
    user: BigInt("4"),
    spent: 35,
  },
];

export default function page(){
  return (
    <>
    <div>
      <NavBar />
    </div>
    <>
    <div className="wholethang h-full flex flex-col">  
    <div className="home-content flex flex-col justify-start items-start font-sans font-bold">
      <Card className="bg-black h-33 bg-opacity-50 text-white">
        <div className = "flex flex-row justify-start items-start w-full">
          <h1 className="text-5xl italic w-96 p-8">
            Change your relationship with money
          </h1>
          <div className="my-10 w-72 ">
            Finagotchi is a new way of budgeting, combining classic budgeting with tamogtchi. Your budgeting habits directly impact
            your new friend based on how much you are able to stick to your good budgeting habits. Sign up today!
          </div>
        </div>
      </Card>
    </div>
    <div className="home-picture flex flex-row justify-end items-end font-sans font-bold">
      <Card className="bg-black bg-opacity-50 h-72 text-white flex flex-row">
        <div className="flex flex-col justify-center items-end w-72">
          <h1 className="w-64">
            This is your starting finagotchi, they are your loyal companion and they rely on you to care for them with your financial
            habits. Do not fail them.
          </h1>
        </div>
        <div className="flex justify-end items-end w-72">
          <Image src={CatGif} alt="Placeholder" width={600} height={600} />
        </div>
      </Card>
    </div>
      <div className="home-carousel flex flex-row justify-start items-start font-sans font-bold">
        <Card className="bg-black bg-opacity-50 h-60 text-white flex flex-row">
          <div className = "flex flex-row justify-center items-center w-48 p-8">
            This is what your budgets will look like when in our dashboard: 
          </div>  
          <div className="flex justify-center items-center p-8">
            <Carousel budgets={budgets} />
          </div>
        </Card>
      </div>  
      <Image
          src={Background}
          alt="Background Image"
          className="pixelart"
          fill={true}
      />
    </div>
    <>
    </>
    </>
    </>
  );
}

