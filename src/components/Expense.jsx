import { useExpenseContext } from "../hooks/useExpensesContext";

const Expense = (props) => {

    const { expense } = props ;
    const [expenses, setExpenses]  = useExpenseContext() ;

    const deleteExpense = async () => {
        const res = fetch(`http://localhost:5000/api/expenses/${expense._id}`, {
            method : 'DELETE'
        })

        const data = await res.json()
        if(data.ok) {

            const newExpenses = expenses.filter( item => item !== data)
            setExpenses(newExpenses)

        }
    }


    return(
        <div className="expense">
            <h3 className="category">{expense.category}</h3>
            <p><span>Amount</span> : {expense.amount} DHS</p>
            <p title={expense.description}><span>Description</span> : {expense.description}</p>
            <p><span>Created at : </span>{expense.createdAt}</p>
            <button onClick={deleteExpense}>Delete</button>
        </div>
    )
}

export default Expense ;