import Carousel from '@/components/dashboardComponents/carousel';
import Menu from '@/components/dashboardComponents/menu';
import { getBudgets } from '@/actions/budget';
import AddTransactionButton from '@/components/dashboardComponents/AddTransactionButton'
import Image, { StaticImageData } from 'next/image'
import { Slider } from '@nextui-org/react'

import newBackground from '../../../public/background.gif';
import Idle from '../../../public/animations/IdleAnimation.gif';
import Sad from '../../../public/animations/SadAnimation.gif';
import Happy from '../../../public/animations/Happy.gif';

// Cattain Spice -- i was thinking cap bc of CAPstone but that pun isnt one im opposed to .

var budgets: Budget[] = [];
type Budget = {
  id: bigint 
  created_at: Date
  name: string, 
  target: number, 
  user: bigint,
  spent: number,
}

var health:number = 0;
var color:string = "";
var image:StaticImageData;

function calculateBudgetHealth(){
  let totalSpent:number = 0;
  let totalGoal:number = 0;
  budgets.map((b)=>{
    totalSpent += b.spent;
    totalGoal += b.target;
  })
  if(totalGoal > 0)
    health = totalSpent/totalGoal;
}

function setColorandImage(){
  if(health < .7){
    color = 'success';
    image = Happy;
  }
  else if(health < 1){
    color = 'warning';
    image = Idle;
  }
  else{
    color = 'danger';
    image = Sad;
  }
}

export default async function dashboard() {
  
  const budgetsResponse = await getBudgets();
  if (budgetsResponse) {
    budgets = budgetsResponse;
  } else {
    console.error("No budget data received from the server");
  }

  calculateBudgetHealth();
  setColorandImage();

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={newBackground}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className = "flex h-full">
      <div className = "p-9 my-40">
          <Menu></Menu>
        </div>
        <div className="py-9 pl-28 pr-7">
          {/* @ts-ignore: b.color turns into a valid property */}
          <Carousel budgets={budgets}></Carousel>
          {/* <div className="absolute flex items-center justify-center mt-48 mr-10"> */}
          <div className="absolute flex items-center justify-center p-24 ml-28">
            <Image
              src={image}
              alt="Overlay Image"
              className="w-96"
              />
          </div>
        </div>
        
        <div className="h-screen flex flex-col justify-between w-full pb-15 pr-10">
          {budgets && <AddTransactionButton budgets={budgets}/>}
          <Slider
            size="lg"
            hideThumb={true}
            value={1-health+.2}
            step={0.01} 
            maxValue={1}
            minValue={0}
            // @ts-ignore
            color={color}
            className="w-full"
            />
        </div>
        {/* Overlay image */}
      </div>

    </div>
  )
}