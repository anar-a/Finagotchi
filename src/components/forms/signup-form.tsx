'use client';

import React, { useState } from "react";
import { UserInfo } from "./UserInfo";
import { PetName } from "./PetName";

export const SignupForm = () => {

    const [formData, setFormData] = useState({
        step: 1,
        name: '',
        budgets: [{ budgetName: '', totalSpent: '', goal: '' }],
        petName: ''
    })

    const prevStep = () => {
        setFormData(prevData => ({ ...prevData, step: prevData.step - 1 }));
    }

    const nextStep = () => {
        setFormData(prevData => ({ ...prevData, step: prevData.step + 1 }));
    }

    const handleChange = (property: string, value: string) => {
        setFormData((prevData) => ({ ...prevData, [property]: value }));
    }

    const handleBudgetChange = (index: number, field: string, value: string) => {
        setFormData((prevData: any) => {
            const newBudgets = [...prevData.budgets]
            newBudgets[index][field] = value
            return { ...prevData, budgets: newBudgets }
        });
    }

    const handleAddBudget = () => {
        setFormData((prevData: any) => ({
            ...prevData,
            budgets: [...prevData.budgets, { budgetName: '', totalSpent: '', goal: '' }],
        }));
    }

    const handleRemoveBudget = (index: number) => {
        setFormData((prevData) => {
            const newBudgets = [...prevData.budgets];
            newBudgets.splice(index, 1);
            return { ...prevData, budgets: newBudgets };
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const renderStep = () => {

        const { step, name, budgets, petName } = formData;
        const values = { step, name, budgets, petName }

        switch (step) {
            case 1:
                return (
                    <UserInfo
                        nextStep={nextStep}
                        handleChange={handleChange}
                        handleBudgetChange={handleBudgetChange}
                        handleAddBudget={handleAddBudget}
                        handleRemoveBudget={handleRemoveBudget}
                        values={values}
                    />
                )
            case 2:
                return (
                    <PetName
                        prevStep={prevStep}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        values={values}
                    />
                )
            
            case 3:
                return (
                    <div>Success</div>
                )

            default:
                return null;
        }
    }

    return <div>{renderStep()}</div>;

}
