'use client';
import { Card } from '@nextui-org/react';

type Transaction = {
  id: bigint,
  created_at: Date,
  name: string,
  budget: bigint,
  user: bigint,
  amount: number,
}

interface Props {
  transaction: Transaction;
}

const TransactionView: React.FC<Props> = ({ transaction }) => {
  let userBudget =  Number(transaction.budget)
  const { name, amount } = transaction;
  const { created_at } = transaction;
  const formattedDate = created_at.toLocaleDateString();
  
  return (
    <Card className="m-5">
      <div>
        <p>
          Transaction: {name}
        </p>
        <p>
          Transaction Amount: {amount}
        </p>
        <p>
          Budget: {userBudget}
        </p>
        <p>
          Date Transaction Made: {formattedDate}
        </p>
      </div>
    </Card>
  );
}
export default TransactionView;