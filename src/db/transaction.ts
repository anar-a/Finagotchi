import prisma from "@/prisma/prisma";

export type TransactionData = {
    name: string,
    budget: number,
    amount: number,
}

export function validateTransaction(transaction: TransactionData) {
    if (transaction.amount < 0) {
        throw new Error("Transaction amount cannot be negative");
    }
}

export function addTransactionDB(transaction: TransactionData) {
    validateTransaction(transaction);

    return prisma.transaction.create({
        data: {
            budget: transaction.budget,
            name: transaction.name,
            amount: transaction.amount,
        }
    })
}