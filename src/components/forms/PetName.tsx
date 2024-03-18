import { createBudgets } from "@/actions/budget";
import { BudgetData } from "@/db/budget";
import React from "react";

export const PetName = ({ prevStep, nextStep, handleChange, values }: any) => {

    const Previous = (event: any) => {
        event.preventDefault();
        prevStep();
    }

    const Continue = (event: any) => {
        event.preventDefault();

        const budgets = values.budgets.map((budget: any) => {
            const b : BudgetData = {
                name: budget.budgetName,
                spent: budget.totalSpent,
                target: budget.goal,
            }
            return b;
        });

        createBudgets(budgets)
        .then((createdBudgets) => {
            if (!createdBudgets) {
                console.log("Unable to create budgets or not budgets provided");
            }
            console.log("Created budgets", createdBudgets)
        })

        nextStep();
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <h1>Enter Your Pet's Name!</h1>
            <form onSubmit={Continue}>
                <label>Pet Name</label>
                <input
                    type="text"
                    name="petName"
                    placeholder="Pet Name"
                    value={values.petName}
                    onChange={event => handleChange('petName', event.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg text-slate-100"
                    onClick={Previous}
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg text-slate-100"
                    onSubmit={Continue}
                >
                    Submit
                </button>
            </form>
        </div>

    )

}
