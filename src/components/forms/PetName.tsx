import { createBudgets } from "@/actions/budget";
import { BudgetData } from "@/db/budget";
import React from "react";
import Image from 'next/image';
import Pet from '../../../public/animations/happy.gif';
import Background from '../../../public/tamoBackground.jpg';
import { editPet, getPet } from "@/actions/pet";
import { editUser, getUser } from "@/actions/user";
import { useRouter } from "next/navigation";

export const PetName = ({ prevStep, nextStep, handleChange, values }: any) => {
    const router = useRouter();

    const Previous = (event: any) => {
        event.preventDefault();
        prevStep();
    }

    const Continue = (event: any) => {
        event.preventDefault();

        console.log('values', values)
        const budgets = values.budgets.map((budget: any) => {
            const b: BudgetData = {
                name: budget.budgetName,
                spent: budget.totalSpent,
                target: budget.goal,
            }
            return b;
        });

        createBudgets(budgets)
            .then(async (createdBudgets) => {
                if (!createdBudgets) {
                    console.log("Unable to create budgets or not budgets provided");
                }
                console.log("Created budgets", createdBudgets)

                const pet = await getPet();
                if (pet) {
                    pet.name = values.petName;
                    editPet(pet);
                }
            })
            .catch((error) => {
                alert('Error creating budgets and pet. Please make sure your pet name is valid.');
            })
        
        getUser()
        .then((user) => {
            if (user) {
                user.name = values.name;

                editUser(user)
                .then(() => {
                    router.push("/dashboard")
                })
                .catch((error) => {
                    console.log("Error editing username for user", user.email, error);
                })
            }

        })
        .catch((error) => {
            console.log("Error getting user to edit name", error);
        })

        nextStep();
    }

    return (
        <div className="h-screen flex flex-col items-center relative">
            <Image src={Background} alt="background" layout="fill"></Image>
            <div className="absolute">
                <h1 className="text-5xl pt-48 text-gray-700">Say Hello to Your Virtual Pet!</h1>
                <h2 className="text-2xl pt-10 pb-2 text-gray-700 text-center">Go Ahead And Name Your Pet!</h2>

                <form onSubmit={Continue}>
                    <div className="h-14 w-full inline-flex mb-5 focus">
                        <label className="whitespace-nowrap text-l w-1/6 text-l items-center inline-flex justify-center rounded-l-xl bg-gray-100 border-2 border-gray-300 text-gray-700 px-12">Pet Name</label>
                        <input
                            className="w-5/6 text-xl indent-2 rounded-r-xl border-y-2 border-r-2 border-gray-300 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            type="text"
                            name="petName"
                            placeholder="Ex: Murray"
                            value={values.petName}
                            onChange={event => handleChange('petName', event.target.value)}
                            maxLength={20}
                            required
                        />
                    </div>
                    <div className="pl-56">
                        <button
                            type="submit"
                            className="bg-red-500 p-2 rounded-lg text-slate-100 mr-5"
                            onClick={Previous}
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-green-700 p-2 rounded-lg text-slate-100"
                            onSubmit={Continue}
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="flex justify-center items-center">
                    <Image src={Pet} alt="Placeholder" width={500}></Image>
                </div>
            </div>
        </div>

    )

}
