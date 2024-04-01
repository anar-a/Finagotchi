import { Card, Input, Button } from "@nextui-org/react";

function AddTransaction() {
  return (
    <Card className="bg-gradient-to-tr from-orange-500 to-yellow-500 m-5 h-32">
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
      <Button color="secondary">
        Add Transaction
      </Button>  
      <Button color="danger">
        Danger
      </Button>  
      </div>

    </Card>
  );
}

export default AddTransaction;