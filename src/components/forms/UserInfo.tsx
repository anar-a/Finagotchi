import React, { useState } from "react";
import { restrictNumberInput } from "@/utility/InputValidation";

export const UserInfo = ({ nextStep, handleChange, handleBudgetChange, handleAddBudget, handleRemoveBudget, values }: any) => {
    const [errorMessage, setErrorMessage] = useState("");

    const Continue = (event: any) => {
        event.preventDefault();

        // validate budgets 
        for (const budget of values.budgets) {
            budget.totalSpent = Number(budget.totalSpent);
            budget.goal = Number(budget.goal); 
            
            let budgetValid = false;

            if (!Number.isNaN(budget.totalSpent) && !Number.isNaN(budget.goal)) {
                if (budget.totalSpent < 0) {
                    setErrorMessage("Total spent must not be negative");
                }
                else if (budget.goal < 0) {
                    setErrorMessage("Goal must not be negative");
                }
                else {
                    budgetValid = true;
                    setErrorMessage("");
                }
            }
            else {
                setErrorMessage("Input must be a number");
            }

            if (!budgetValid) {
                return;
            };
        }

        nextStep();
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <h1 className="text-5xl py-10 text-gray-700">Start Saving Now!</h1>
            <form className="flex flex-col items-center" onSubmit={Continue}>
                <div className="h-14 w-full inline-flex mb-5 focus">
                    <label className="w-1/6 items-center inline-flex justify-center rounded-l-xl bg-gray-100 border-2 border-gray-300 text-gray-700">Name</label>
                    <input
                        className="w-5/6 text-xl indent-2 rounded-r-xl border-y-2 border-r-2 border-gray-300 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        type="text"
                        name="name"
                        placeholder="Ex: Jack Dawson"
                        value={values.name}
                        onChange={event => handleChange('name', event.target.value)}
                        required
                    />
                </div>

                {values.budgets.map((input: any, index: number) => {
                    return (
                        <div key={index} className="h-14 w-full rounded-lg w-full my-2 flex flex-nowrap border-2 border-gray-300">
                            <input
                                className="items-center inline-flex justify-center indent-2 rounded-l-lg border-r-2"
                                name="budgetName"
                                placeholder="Budget Name"
                                value={input.budgetName}
                                onChange={event => handleBudgetChange(index, 'budgetName', event.target.value)}
                                required
                            />
                            <span className="pl-1 items-center inline-flex text-gray-500 sm:text-sm">$</span>
                            <input
                                className="items-center inline-flex justify-center indent-2 border-r-2"
                                name="totalSpent"
                                placeholder="Total Spent"
                                value={input.totalSpent}
                                onChange={event => handleBudgetChange(index, 'totalSpent', event.target.value)}
                                onInput={restrictNumberInput}
                                required
                            />
                            <span className="pl-1 items-center inline-flex text-gray-500 sm:text-sm">$</span>
                            <input
                                className="items-center inline-flex justify-center indent-2 border-r-2"
                                name="goal"
                                placeholder="Goal"
                                value={input.goal}
                                onChange={event => handleBudgetChange(index, 'goal', event.target.value)}
                                onInput={restrictNumberInput}
                                required
                            />
                            <button className="p-1 bg-red-400 rounded-r-md text-gray-800" type="button" onClick={() => handleRemoveBudget(index)}>Remove</button>
                        </div>
                    )
                })}

                <div className="text-red-600 my-5 font-semibold">
                    {errorMessage}
                </div>

                <div className="w-full flex justify-end">
                    <button 
                        className="bg-blue-400 p-2 mr-60 rounded-lg text-slate-100" 
                        type="button" 
                        onClick={handleAddBudget}>Add Budget</button>
                    <button
                        type="submit"
                        className="bg-blue-400 p-2 rounded-lg text-slate-100" 
                        onSubmit={Continue} >Continue</button>
                </div>
            </form>
        </div>
    )

}