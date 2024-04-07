import { addTransaction } from "@/actions/transaction";
import { TransactionData } from "@/db/transaction";
import { restrictNumberInput } from "@/utility/InputValidation";
import { budget } from "@prisma/client";
import { FormEvent, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

// the parent component of this one should have a state boolean for whether the modal is visible or not
// and it should pass a function to toggle that variable as a prop

export default function modal(props: any) {
  const toggleModal = props.toggleModal;
  const transactionForm = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleBackgroundClick(event: React.MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (target.id === "background") {
      toggleModal();
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = transactionForm.current
    if (form) {
      //27-42 look into setSubmitting function
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

      toggleModal();
    }
  }

  return (
    <div
      id="background"
      className="fixed inset-0 backdrop-blur-sm z-10 flex justify-center items-center"
      onClick={handleBackgroundClick}>
      <div className="bg-white rounded-xl py-5 px-10 shadow-xl relative">
        <h1 className="text-2xl font-medium mb-5 text-center"> Add Transaction </h1>
        <button
          className="absolute top-0 right-0 m-3 bg-red-600 rounded-md"
          onClick={toggleModal}>
          <FaXmark className="w-5 h-5 fill-white m-1"/>
        </button>
        <form 
          ref={transactionForm}
          onSubmit={handleSubmit}>
          <div>
            <div className="flex justify-between my-3 gap-3">
              <label className="text-xl">Name</label>
              <input
                name="name"
                type="text"
                className="border border-gray-800 rounded-md ms-5 px-2 w-60" 
                required />
            </div>  

            <div className="flex justify-between my-5">
              <label className="text-xl">Amount</label>
              <input
                name="amount"
                className="border border-gray-800 rounded-md ms-5 px-2 w-60" 
                onInput={restrictNumberInput} 
                required />
            </div>

            <div className="flex justify-between my-5">
              <label className="text-xl">Budget</label>
              <select
                name="budget"
                className="ml-3 px-3 bg-slate-200 rounded-md w-60"
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

            <div className="flex justify-end mt-5">
              <button
                type="button"
                className="border border-purple-700 hover:bg-slate-100 text-purple-700 font-medium py-1 px-3 mx-2 rounded-md"
                onClick={toggleModal}>
                  CANCEL
              </button>
              <button 
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-1 px-3 ms-2 rounded-md disabled:bg-slate-400"
                disabled={submitting}> 
                  ADD 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}