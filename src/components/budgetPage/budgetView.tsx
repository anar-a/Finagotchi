'use client'
import { Card, Button, Slider, Spacer, Input } from '@nextui-org/react';
import Image, { StaticImageData } from 'next/image'
import Edit from '../../../public/buttonIcons/edit-2-64.png';
import { useState } from 'react';

type Budget = {
  id: bigint 
  created_at: Date
  name: string, 
  target: number, 
  user: bigint,
  spent: number,
}

interface Props {
  budget: Budget;
}

function color(spent:number, target:number):string {
  let score = (spent/target);
  if (score<.51)
    return 'success'
  else if(score>1)
    return 'danger'
  return 'warning'
}

const BudgetView: React.FC<Props> = ({ budget }) => {
  const { name, spent, target } = budget;
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  return (
    <Card className="bg-black bg-opacity-50 text-white m-5 p-4">

      <div className="flex justify-between">
        { !editMode ? (
          <>
          <div className="flex w-11/12 my-2">
            <p className="font-bold">
              { name }
            </p>
            <Spacer x={4} />
            Amount Spent: { spent }
            <Spacer x={4} />
            Budget Goal: { target }
            <Spacer x={4} />
          </div>

          <Slider
            size="md"
            hideThumb={true}
            className="max-w-24 m-2"
            // @ts-ignore: b.color turns into a valid property
            color={color(spent, target)}
            step={0.01} 
            value={spent/target}
            maxValue={1}
            minValue={0}>
          </Slider>
          <Spacer x={8} />

          <Button isIconOnly color="primary" aria-label="Like" onClick={toggleEditMode}>
            <Image src={Edit} className="w-8" alt="Add Icon for Add a Transaction Button"></Image>
          </Button>  
          </>  
        ) : (
          <>
          <Input
            variant="bordered"
            className="text-color-white"
            defaultValue={ name }/>
            <Spacer x={4} />
          <Input
            variant="bordered"
            className="text-color-white"
            defaultValue={ spent.toString() }/>
            <Spacer x={4} />
          <Input
            variant="bordered"
            className="text-color-white"
            defaultValue={ target.toString() }/>
            <Spacer x={4} />
          <Button color="danger" aria-label="delete">
            <p className="text-base">Delete</p>
          </Button>  
            <Spacer x={4} />
          <Button color="default" aria-label="cancel" onClick={toggleEditMode}>
            <p className="text-base">Cancel</p>
          </Button>  
            <Spacer x={4} />
          <Button color="success" aria-label="save">
            <p className="text-base">Save</p>
          </Button>  
          </>  
        )
        }
      </div>
    </Card>
  )
}

export default BudgetView;