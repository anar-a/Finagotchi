
type Budget = {
  id: bigint 
  created_at: Date
  name: string, 
  target: number, 
  user: bigint,
  spent: number,
}


// import budget type here
// extend budget type but with 
// import function to grab all associated budgets

export default async function Budgets() {

  // Grab all budgets
  console.log("Here is where we are going to start testing");

  return (
    <div className="bg-gradient-to-tr from-purple-500 to-blue-500 min-h-screen">
      {/* Header */}
      <p className="text-white text-5xl p-5">
        Budgets
      </p>

      {/* Add Budget Fields */}
      <div>

      </div>

      {/* Display All Budgets */}
      <div>
        {/* mapping out all of the budgets */}
        <div>
          {/* if else for if edit button is clicked */}
        </div>
      </div>
    </div>
  )
}