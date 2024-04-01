import { createBudgets } from "@/actions/budget";
import { BudgetData } from "@/db/budget";
import React from "react";
import Image from 'next/image';
import Background from '../../../public/animations/happy.gif';

export const PetName = ({ prevStep, nextStep, handleChange, values }: any) => {

    const Previous = (event: any) => {
        event.preventDefault();
        prevStep();
    }

    const Continue = (event: any) => {
        event.preventDefault();

        const budgets = values.budgets.map((budget: any) => {
            const b: BudgetData = {
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
            <h1 className="text-5xl py-10 text-gray-700">Say Hello to Your Virtual Pet!</h1>
            <Image className="-mt-20" src={Background} alt="Placeholder" width={400} height={200}></Image>
            <h2 className="text-3xl py-10 text-gray-700">Give Your Pet A Name!</h2>
            <form onSubmit={Continue}>
                <div className="h-14 w-full inline-flex mb-5 focus">
                    <label className="w-1/6 text-l items-center inline-flex justify-center rounded-l-xl bg-gray-100 border-2 border-gray-300 text-gray-700 pl-3">Pet Name</label>
                    <input
                        className="w-5/6 text-xl indent-2 rounded-r-xl border-y-2 border-r-2 border-gray-300 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        type="text"
                        name="petName"
                        placeholder="Ex: Murray"
                        value={values.petName}
                        onChange={event => handleChange('petName', event.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg text-slate-100 mr-5"
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
