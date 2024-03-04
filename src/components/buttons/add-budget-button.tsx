export const AddBudgetButton = (onClick) => {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>
                +
            </button>
        </div>
    );
};