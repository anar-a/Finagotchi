'use client';
import { Card } from '@nextui-org/react';
import { getBudget } from '@/actions/budget';
import { useState, useEffect } from 'react';

type Transaction = {
  id: bigint,
  created_at: Date,
  name: string,
  budget: bigint,
  user: bigint,
  amount: number,
}

type Budget = {
  id:bigint,
  name: string
}


interface Props {
  transaction: Transaction;
}


const TransactionView: React.FC<Props> = ({ transaction }) => {
  let userBudget =  Number(transaction.budget)
  const [budgetName, setBudgetName] = useState<string>('');
  const { name, amount, created_at } = transaction;
  const formattedDate = created_at.toLocaleDateString();

  useEffect(() => {
    getBudget(userBudget)
      .then((budget: Budget | null | undefined) => {
        if (budget) {
          setBudgetName(budget.name);
        } else {
          console.error('Budget not found for ID', transaction.budget);
        }
      })
      .catch((error: Error) => {
        console.error('Error catching budget: ', error);
      });
  });
  
  return (
    <Card className = "bg-black bg-opacity-50 text-white flex flex-auto min-h-full">
      <div className="p-2">
        <p className = "text-3xl">
          Transaction: {name}
        </p>
        <p className = "text-3xl">
          Transaction Amount: {amount}
        </p>
        <p className = "text-3xl">
          Budget: {budgetName}
        </p>
        <p className = "text-3xl">
          Date Transaction Made: {formattedDate}
        </p>
      </div>
    </Card>
  );
}
export default TransactionView;