import prisma from "@/prisma/prisma";
import { user } from "@prisma/client";

// -------------------------------------------------------------------------------------
// These can only be used from the server, for client API calls check /actions/budget.ts
// -------------------------------------------------------------------------------------

export type BudgetData = {
    name: string,
    target: number,
    spent: number,
};

export type UserBudgetData = BudgetData & {
    user: number
};

export function validateBudget(budgetData: UserBudgetData | BudgetData) {
    if (budgetData.target < 0) {
        throw new Error("Budget target cannot be negative");
    }
}

export function createBudgetForUser(userBudgetData: UserBudgetData) {
    validateBudget(userBudgetData);

    return prisma.budget.create({
        data: {  // need to be explicit instead of using the ...spread for security
            user: userBudgetData.user,
            target: userBudgetData.target,
            spent: userBudgetData.spent,
            name: userBudgetData.name,
        }
    });
}

// do not expose this to the client without validation, it does not check budget ownership
export function editBudgetById(id: number, userBudgetData: UserBudgetData) {
    validateBudget(userBudgetData);
    
    return prisma.budget.update({
        where: {
            id: id,
            user: userBudgetData.user,
        },
        data: {
            target: userBudgetData.target,
            spent: userBudgetData.spent,
            name: userBudgetData.name,
        }
    })
}

export function getBudgetById(id: number) {
    const budget = prisma.budget.findUnique({
        where: {
            id: id
        }
    })

    return budget;
}

export function getBudgetByUserAndId(user: user, id: number) {
    return prisma.budget.findUnique({
        where: {
            id: id,
            user: user?.id,
        }
    })
}

export function getBudgetsByUser(userId: number) {
    return prisma.budget.findMany({
        where: {
            user: userId
        }
    })
}

export function deleteBudgetByUserAndId(user: user, id: number) {
    return prisma.budget.delete({
        where: {
            id: id,
            user: user.id,
        }
    })
}