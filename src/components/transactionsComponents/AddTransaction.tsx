import { Card, Input, Button } from "@nextui-org/react";

function AddTransaction() {
  return (
    <div className="m-5 h-32">
      <div className="flex flex-wrap gap-4 items-center w-full"> 
      <Input 
        labelPlacement="outside"
        label="Name"
        className="w-40">
      </Input>
      <Input 
        labelPlacement="outside"
        label="Amount"
        className="w-40">
      </Input>
      <Input 
        labelPlacement="outside"
        label="Budget"
        className="w-40">
      </Input>
      <Button color="secondary" className="mt-6">
        Add Transaction
      </Button>  
      <Button color="danger" className="mt-6">
        Cancel
      </Button>  
      </div>

    </div>
  );
}

export default AddTransaction;