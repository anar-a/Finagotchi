'use server'
import { TransactionData, addTransactionDB } from '@/db/transaction';
import { getUser } from './user';
import { getBudgetById } from '@/db/budget';
import { getUserById } from '@/db/user';

export async function addTransaction(transaction: TransactionData) {
    try {
        const user = await getUser();
        const budget = await getBudgetById(transaction.budget);

        if (user && budget) {
            const budgetOwner = await getUserById(Number(budget.user));

            if (budgetOwner && budgetOwner.email === user.email) {
                return addTransactionDB(transaction);
            }
        }
    }
    catch (e) {
        console.log("Error adding transaction", e);
    }
}