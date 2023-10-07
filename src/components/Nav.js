import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";
import { useExpenseContext } from "../hooks/useExpensesContext";

const Nav = () => {

    // const [expenses, setExpenses] = useContext(ExpenseContext)

    const [expenses, setExpenses] = useExpenseContext() ;


    

    return(
        <header>
            <h1>Expenses Management</h1>
            <h5>Number of Expenses : {expenses.length} </h5>
        </header>
    )
}

export default Nav ;