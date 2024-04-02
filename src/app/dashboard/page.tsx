import Carousel from '@/components/dashboardComponents/carousel';
import Menu from '@/components/dashboardComponents/menu';
import { getBudgets } from '@/actions/budget';
import AddTransactionButton from '@/components/dashboardComponents/AddTransactionButton'
import Image from 'next/image'
import { Slider } from '@nextui-org/react'

import newBackground from '../../../public/background.gif';
import Background from '../../../public/pixelArt.jpeg';
import Idle from '../../../public/animations/IdleAnimation.gif';
import Sad from '../../../public/animations/SadAnimation.gif';
import Happy from '../../../public/animations/happy.gif';

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
var image = Idle;

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

      {/* Overlay image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={image}
          alt="Overlay Image"
          className="w-1/2"
        />
      </div>
    </div>
  )
}