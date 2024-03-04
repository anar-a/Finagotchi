'use client';

import { ChangeEvent, useState } from "react";
import { AddBudgetButton } from "../buttons/add-budget-button";

export const SignupForm = () => {

    // const Budget = ({ budget, onChange, onDelete }) => {
    //     const { budgetName, amountSpent, goal } = budget;

    //     const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
    //         const { name, value } = event.target;
    //         onChange({ ...budget, [name]: value });
    //     };

    //     return (
    //         <div>
    //             <input
    //                 type="text"
    //                 name="budgetName"
    //                 placeholder="Budget Name"
    //                 value={budgetName}
    //                 onChange={handleInputChange}
    //             />
    //             <input
    //                 type="text"
    //                 name="amountSpent"
    //                 placeholder="Amount Spent"
    //                 value={amountSpent}
    //                 onChange={handleInputChange}
    //             />
    //             <input
    //                 type="text"
    //                 name="goal"
    //                 placeholder="Budget Goal"
    //                 value={goal}
    //                 onChange={handleInputChange}
    //             />
    //             <button onClick={onDelete}>Delete</button>
    //         </div>
    //     );
    // }

    // const [budgets, setBudgets] = useState([
    //     { name: '', amountSpent: '', goal: '' },
    // ]);

    // const handleAddBudget = () => {
    //     setBudgets((prevBudgets) => [
    //         ...prevBudgets,
    //         { name: "", amountSpent: "", goal: "" }
    //     ]);
    // };

    // const handleBudgetChange = (index: number, updatedBudget: { name: string; amountSpent: string; goal: string; }) => {
    //     setBudgets((prevBudgets) => {
    //         const newBudgets = [...prevBudgets];
    //         newBudgets[index] = updatedBudget;
    //         return newBudgets
    //     });
    // };

    // const handleDeleteBudget = (index: number) => {
    //     setBudgets((prevBudgets) => {
    //         const newBudgets = [...prevBudgets]
    //         newBudgets.splice(index, 1)
    //         return newBudgets;
    //     });
    // };

    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' }
    ])

    const handleFormChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value
        setInputFields(data);

    }

    return (

        <form action="/send-data-here" method="post">
            <h1>Register</h1>

            {inputFields.map(
                (input, index) => {
                    return (
                        <div key={index}>
                            <input
                                name="firstName"
                                placeholder="First Name"
                                value={input.firstName}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                value={input.lastName}
                                onChange={event => handleFormChange(index, event)}
                            />
                        </div>

                    )
                }

            )}

        </form>
    );




}