"use client"

import { Card, Input, Button } from "@nextui-org/react";
import { addTransaction } from "@/actions/transaction";
import {FormEvent, useRef, useState } from "react";
import { TransactionData } from "@/db/transaction";
import { budget } from "@prisma/client";
import { restrictNumberInput } from "@/utility/InputValidation";



export default function AddTransaction(props: any) {
  
  const transactionForm = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = transactionForm.current
    if (form) {
      const data = new FormData(form);     
      
      const transactionData: TransactionData = {
        name: String(data.get('name')),
        amount: Number(data.get('amount')),
        budget: Number(data.get('budget')),
      }

      setSubmitting(true);
      const transaction = await addTransaction(transactionData);

      setSubmitting(false);
      if (transaction) console.log("Successfully created transaction", transaction);
      else console.log("Error creating transaction");
    }
  }
  
  return (
    <form 
          ref={transactionForm}
          onSubmit={handleSubmit}>
    <div className="flex flex-row px-8">
      <div className="flex flex-wrap items-center w-full"> 
      <label className="text-xl text-white">Name</label>
              <input
                name="name"
                type="text"
                className="border border-gray-800 rounded-md ms-5 px-2 w-60" 
                required />
            </div> 
            <div className="flex flex-wrap items-center w-full">
            <label className="text-xl text-white">Amount</label>
              <input
                name="amount"
                className="border border-gray-800 rounded-md ms-5 px-2 w-60" 
                onInput={restrictNumberInput} 
                required />
            </div>
      <div className="flex flex-wrap items-center w-full">
        <label className="text-xl text-white">Budget</label>
          <select
            name="budget"
            className="ml-5 px-3 bg-slate-200 rounded-md w-60"
            required>
            {props.budgets.map((budget: budget, index: number) => {
            return (
              <option 
                key={index} 
                value={Number(budget.id)}>
                {budget.name}
              </option>
              )
           })}
              </select>
            </div>
      <Button type="submit"
        className="bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-md disabled:bg-slate-400 min-w-fit"
        disabled={submitting}>
        Add Transaction
      </Button>  
      </div>
    </form>
  );
}