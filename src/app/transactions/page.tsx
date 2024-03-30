import { getTransactions } from '@/actions/transaction';

//      a. transcation title on the top left
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
//      d. gradient background


type Transactions = {
  id: bigint,
  created_at: Date,
  name: string,
  target: number,
  user: bigint,
  spent: number,
}

export default async function transactions() {

  var transactions: Transactions[] = [];
  const transactionsResponse = await getTransactions();
  if (transactionsResponse) {
    //@ts-ignore
    transactions = transactionsResponse;
    console.log(transactions);
  } else {
    console.error("No transaction data received from the server");
  }

  return (
    <div className="bg-gradient-to-tr from-purple-500 to-blue-500">
      <p className="text-white text-5xl">
        Transactions
      </p>

      {transactions.map((t) => (
        <div key={t.name}>
          <p>{t.name}</p>
        </div>
      ))}

    </div>
  );
}
