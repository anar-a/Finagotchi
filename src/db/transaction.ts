import prisma from "@/prisma/prisma";
import { editBudgetById } from "@/db/budget";
import { getBudgetById } from "@/db/budget";

export type TransactionData = {
    name: string,
    budget: number,
    amount: number,
}

export type UserTransactionData = TransactionData & {
    user: number
};

export function validateTransaction(transaction: UserTransactionData | TransactionData) {
    if (transaction.amount < 0) {
        throw new Error("Transaction amount cannot be negative");
    }
}

export function addTransactionDB(userTransaction: UserTransactionData) {
  validateTransaction(userTransaction);

  return prisma.transaction.create({
    data: {
      //@ts-ignore
      name: userTransaction.name,
      budget: userTransaction.budget,
      amount: userTransaction.amount,
      user: userTransaction.user
    }
  })
}

export function getTransactionsByUser(userId: number) {
    return prisma.transaction.findMany({
        where: {
            user: userId
        }
    })
}