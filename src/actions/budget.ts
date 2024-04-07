'use server'
import { getUser } from "./user"
import { BudgetData, createBudgetForUser, editBudgetById, getBudgetsByUser, getBudgetByUserAndId, deleteBudgetByUserAndId} from '@/db/budget';
// slower since it has to query for the user by email
export async function createBudget(budgetData: BudgetData) {
    try {
        const user = await getUser();

        if (user) {
            const newBudget = await createBudgetForUser({
                ...budgetData,
                user: Number(user.id),
            });

            return newBudget;
        }

    }
    catch (error) {
        console.log('Error creating budget by session', error);
    }
}

export async function createBudgets(budgets : BudgetData[]) {
    try {
        const user = await getUser();

        if (user) {
            const newBudgets = await Promise.all(
                budgets.map(async (budget: BudgetData) => {
                    const newBudget = await createBudgetForUser({
                        ...budget,
                        user: Number(user.id),
                    });
                    return newBudget;
                })
            );

            return newBudgets;
        }
    }
    catch (error) {
        console.log('Error creating budgets', error);
    }
}

export async function getBudgets() {
    let user;
    try {
        user = await getUser();
        if (user) {
            return getBudgetsByUser(Number(user.id));
        }
    }
    catch (error) {
        console.log(`Error getting all budgets for ${user?.email}`);
    }
}

export async function getBudget(id: number) {
    try {
        const user = await getUser();
        if (user) {
            return getBudgetByUserAndId(user, id);
        }
    }
    catch (error) {
        console.log(`Could not find budget for id ${id}`, error);
    }
}

export async function editBudget(id: number, budgetData: BudgetData) {
    try {
        const user = await getUser();

        if (user) {    
            const editedBudget = await editBudgetById(id, {
                user: Number(user.id),
                ...budgetData
            })
    
            return editedBudget;
        }
    }
    catch (error) {
        console.log('Error editing budget', error);
    }
}

export async function deleteBudget(id: number) {
    try {
        const user = await getUser();

        if (user) {
            const deletedBudget = await deleteBudgetByUserAndId(user, id);
            return deletedBudget;
        }
    }
    catch (error) {
        console.log('Error deleting budget', error);
    }
}