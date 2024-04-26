import { getTransactions } from '@/actions/transaction';
import TransactionView from '@/components/transactionsComponents/TransactionView';
import AddTransaction from '@/components/transactionsComponents/AddTransaction';
import { Spacer } from '@nextui-org/react'
import { getBudgets } from '@/actions/budget';

type Transactions = {
  id: bigint,
  created_at: Date,
  name: string,
  budget: bigint,
  user: bigint,
  amount: number,
}

var budgets: Budget[] = [];
  type Budget = {
    id: bigint 
    created_at: Date
    name: string, 
    target: number, 
    user: bigint,
    spent: number,
  }

export default async function transactions() {

  const budgetsResponse = await getBudgets();
  if (budgetsResponse) {
    budgets = budgetsResponse;
  } else {
    console.error("No budget data received from the server");
  }

  var transactions: Transactions[] = [];
  const transactionsResponse = await getTransactions();
  if (transactionsResponse) {
    //@ts-ignore
    transactions = transactionsResponse;
  } else {
    console.error("No transaction data received from the server");
  }

  return (
    <div className="h-max bg-gradient-to-tr from-purple-500 to-blue-500">

      <p className="text-white text-5xl p-5">
        Transactions
      </p>
      {budgets && <AddTransaction budgets={budgets}/>}
      {/* <AddTransaction/> */}

      <div className="p-5 min-h-vw grid grid-cols-3">
        {transactions.map((t) => (
          <div key={t.id} 
          className="p-2">
            <TransactionView transaction={t}/>
            <Spacer y={4} />
          </div>
        ))}
      </div>

    </div>
  );
}
