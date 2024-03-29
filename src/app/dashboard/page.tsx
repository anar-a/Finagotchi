import Background from '../../../public/pixelArt.jpeg';
import Carousel from '@/components/dashboardComponents/carousel';
import Menu from '@/components/dashboardComponents/menu';
import { getBudgets } from '@/actions/budget';
import AddTransactionButton from '@/components/dashboardComponents/AddTransactionButton'
import Image from 'next/image'


export default async function dashboard() {
  
  type Budget = {
    id: bigint 
    created_at: Date
    name: string, 
    target: number, 
    user: bigint,
    spent: number,
  }

  var budgets: Budget[] = [];
  const budgetsResponse = await getBudgets();
  if (budgetsResponse) {
    budgets = budgetsResponse;
  } else {
    console.error("No budget data received from the server");
  }


  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'solid 10px black' }}>
        <Image 
          src={Background}
          alt="Background Image with Pet"
          layout="fill"
          objectFit="cover">
        </Image>
      </div>
      {/* All other components */}
      <div className = "flex h-full">
        {/* menu */}
        <div className = "p-9 my-40">
          <Menu></Menu>
        </div>
        <div className="py-9 pl-28 pr-7">
          {/* @ts-ignore: b.color turns into a valid property */}
          <Carousel budgets={budgets}></Carousel>
        </div>
        
        {budgets && <AddTransactionButton budgets={budgets}/>}
      </div>
    </div>
  )
}