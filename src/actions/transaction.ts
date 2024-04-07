'use server'
import { TransactionData, addTransactionDB, getTransactionsByUser } from '@/db/transaction';
import { getUser } from './user';
import { getBudgetById } from '@/db/budget';
import { editBudgetById } from '@/db/budget';
import { getUserById } from '@/db/user';

type Transactions = {
  id: bigint,
  created_at: Date,
  name: string,
  budget: bigint,
  user: number,
  amount: number,
}

export async function addTransaction(transaction: TransactionData) {
  try {
    const user = await getUser();
    const budget = await getBudgetById(transaction.budget);

    if (user && budget) {
      const budgetOwner = await getUserById(Number(budget.user));

      if (budgetOwner && budgetOwner.email === user.email) {

        // Updating the associated budget (lines 18-32)
        try {
          budget.spent = budget.spent + transaction.amount;
          let userNumber = Number(budget.user)
          let updatedBudget = {
            name: budget.name,
            spent: budget.spent,
            target: budget.target,
            user: userNumber
          }
          const editBudget = await editBudgetById(transaction.budget, updatedBudget);
        }
        catch (e) {
          console.log("Error updating budget", e);
        }

        const newTransaction = await addTransactionDB({
          ...transaction,
          user: Number(user.id),
        });
        return newTransaction;
      }
    }
  }
  catch (e) {
    console.log("Error adding transaction", e);
  }
}

export async function getTransactions() {
  let user;
  try {
    user = await getUser();
    if (user) {
      try {
        const transactionsResponse = await getTransactionsByUser(Number(user.id));
        var transactions: Transactions[] = [];
        transactionsResponse.map((t) => {
          let data: Transactions = {
            name: t.name,
            budget: t.budget,
            amount: Number(t.amount),
            id: t.id,
            created_at: t.created_at,
            user: Number(t.user),
          }
          transactions.push(data)
        })
        return transactions;
      } catch (error) {
        console.error("error grabbing transactions", error)
      }
    }
  }
  catch (error) {
    console.log(`Error getting the user`);
  }
}