import { getBudgets } from '@/actions/budget';
import BudgetView from '@/components/budgetPage/budgetView';
import AddBudget from '@/components/budgetPage/addBudget';

type Budget = {
  id: bigint 
  created_at: Date
  name: string, 
  target: number, 
  user: bigint,
  spent: number,
}
type BudgetDisplay = Budget & {
  editMode: false;
}
var budgetData: Budget[] = [];


export default async function Budgets() {

  const budgetsResponse = await getBudgets();
  if (budgetsResponse) {
    budgetData = budgetsResponse;
  } else {
    console.error("No budget data received from the server");
  }

  console.log("Here is where we are going to start testing");

  return (
    <div className="bg-gradient-to-tr from-purple-500 to-blue-500 min-h-screen">
      {/* Header */}
      <p className="text-white text-5xl p-5">
        Budgets
      </p>

      {/* Add Budget Fields */}
      <div>
        <AddBudget/>
      </div>

      {/* Display All Budgets */}
      <div className="grid grid-cols-2">
        {budgetData.map((b)=> (
          <div key={b.id}>
            <BudgetView budget={b}/>
          </div>
        ))}
      </div>
    </div>
  )
}