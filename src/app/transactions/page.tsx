import { getTransactions } from '@/actions/transaction';
import TransactionView from '@/components/transactionsComponents/TransactionView';
import AddTransaction from '@/components/transactionsComponents/AddTransaction';
import { Spacer } from '@nextui-org/react'

type Transactions = {
  id: bigint,
  created_at: Date,
  name: string,
  budget: bigint,
  user: bigint,
  amount: number,
}

export default async function transactions() {

  var transactions: Transactions[] = [];
  const transactionsResponse = await getTransactions();
  if (transactionsResponse) {
    //@ts-ignore
    transactions = transactionsResponse;
  } else {
    console.error("No transaction data received from the server");
  }

  return (
    <div className="bg-gradient-to-tr from-purple-500 to-blue-500">

      <p className="text-white text-5xl p-5">
        Transactions
      </p>

      <AddTransaction/>

      <div className="p-5">
        {transactions.map((t) => (
          <div key={t.id} >
            <TransactionView transaction={t}/>
            <Spacer y={4} />
          </div>
        ))}
      </div>

    </div>
  );
}
