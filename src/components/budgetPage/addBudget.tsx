'use client'
import { Card, Input, Spacer, Button } from '@nextui-org/react'

function AddBudget(){
  return (
    <Card className="bg-black bg-opacity-50 text-white m-5 p-4">
      <div className="flex justify-between">
        <div className="flex">
        <p className = "my-auto">Name:</p>
        <Spacer x={4} />
        <div>
          <Input
            variant="bordered"
            className = "text-color-white max-w-24"/>
        </div>
          <Spacer x={12} />
        <p className = "my-auto"> Budget Target:</p>
        <Spacer x={4} />
        <div>
          <Input
            variant="bordered"
            className = "text-color-white"/>
        </div>
        <Spacer x={12} />
        <p className = "my-auto"> Amount Spent:</p>
        <Spacer x={4} />
        <div>
          <Input
            variant="bordered"
            className = "text-color-white"/>
        </div>
        <Spacer x={12} />
        </div>
        <div className="my-auto">
          <Button color="primary" aria-label="save">
            <div className="text-base text-white">Add New Budget</div>
          </Button>  
        </div>
      </div>
    </Card>
  )
}

export default AddBudget;