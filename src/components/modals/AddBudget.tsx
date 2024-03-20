import { restrictNumberInput } from "@/utility/BudgetInputValidation";
import './AddBudget.css';

// the parent component of this one should have a state boolean for whether the modal is visible or not
// and it should pass a function to toggle that variable as a prop

export default function modal(props: any) {
  const toggleModal = props.toggleModal;

  function handleClose(event: React.MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (target.id === "background") {
      toggleModal();
    }
  }

  return (
    <div
      id="background"
      className="fixed inset-0 backdrop-blur-sm z-10 flex justify-center items-center"
      onClick={handleClose}>
      <div className="bg-white rounded-lg py-5 px-10">
        <h1 className="text-2xl font-medium mb-5 text-center"> Add Budget </h1>
        <form>
          <div>
            <div className="flex justify-between my-3">
              <label className="text-xl">Name</label>
              <input
                type="text"
                className="border border-gray-800 rounded-md ms-5 px-2" />
            </div>

            <div className="flex justify-between my-5">
              <label className="text-xl">Spent</label>
              <input
                className="border border-gray-800 rounded-md ms-5 px-2"
                onInput={restrictNumberInput} />
            </div>

            <div className="flex justify-between my-5">
              <label className="text-xl">Goal</label>
              <input
                className="border border-gray-800 rounded-md ms-5 px-2" 
                onInput={restrictNumberInput} />
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="button"
                className="border border-purple-700 hover:bg-slate-100 text-purple-700 font-medium py-1.5 px-3 mx-2 rounded-md">
                  CANCEL
              </button>
              <button 
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-1.5 px-3 ms-2 rounded-md"> 
                  SAVE 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}