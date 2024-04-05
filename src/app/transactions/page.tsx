import { getTransactions } from '@/actions/transaction';
import TransactionView from '@/components/transactionsComponents/TransactionView';
import AddTransaction from '@/components/transactionsComponents/AddTransaction';

//      b. add transaction button that will display input fields (save, cancel)
//      c. below b, list of all associated transactions
// 4. get money
// writing up some stretch goal tickets:
//      pixel background for page
//      edit button for previous transactions
//      delete button for previous transactions

// DONE
// planning guys B)
// 1. write a function to pull all the associated transactions
//      a. action version
//      b. db version (base off budget function)
//      lines 48-59 actions budget, lines 73-79 db budget
// 2. manually enter userIDs for transactions already in Supabase so it aint brokey
// 3. draw up layout for transactions page
//      a. transcation title on the top left
//      d. gradient background



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
    <div className="bg-gradient-to-tr from-purple-500 to-blue-500 h-screen">

      <p className="text-white text-5xl p-5">
        Transactions
      </p>

      <AddTransaction/>

      {transactions.map((t) => (
        <TransactionView key={t.id} transaction={t}/>
      ))}
    </div>
  );
}
