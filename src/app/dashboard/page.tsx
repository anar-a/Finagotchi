import Background from '../../../public/pixelArt.jpeg';
import Carousel from '@/components/dashboardComponents/carousel';
import Menu from '@/components/dashboardComponents/menu';
import { getBudgets } from '@/actions/budget';
import AddTransactionButton from '@/components/dashboardComponents/AddTransactionButton'
import Image from 'next/image'
import { Slider } from '@nextui-org/react'

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

function getColor(){
  if(health < .7)
    return 'success'
  else if(health < 1)
    return 'warning'
  else
    return 'danger'
}

export default async function dashboard() {
  
  const budgetsResponse = await getBudgets();
  if (budgetsResponse) {
    budgets = budgetsResponse;
  } else {
    console.error("No budget data received from the server");
  }

  calculateBudgetHealth();

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image 
        src={Background}
        alt="Background Image with Pet"
        layout="fill"
        objectFit='cover'>
      </Image>
      <div className = "flex h-full">
        <div className = "p-9 my-40">
          <Menu></Menu>
        </div>
        <div className="py-9 pl-28 pr-7">
          {/* @ts-ignore: b.color turns into a valid property */}
          <Carousel budgets={budgets}></Carousel>
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
            color={getColor()}
            className="w-full"
            />
        </div>
      </div>
    </div>
  )
}