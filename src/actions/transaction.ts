'use server'
import { TransactionData, addTransactionDB, getTransactionsByUser } from '@/db/transaction';
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
            return getTransactionsByUser(Number(user.id));
        }
    }
    catch (error) {
        console.log(`Error getting all budgets for ${user?.email}`);
    }
}