import { useEffect } from "react";
import Expense from "./Expense";
import Form from "./Form";
import { useExpenseContext } from "../hooks/useExpensesContext";


const Expenses = () => {


    const [expenses, setExpenses ] = useExpenseContext() ;


    useEffect(
        () => {
            const fetchData = async () => {

                const res = await fetch('http://localhost:5000/api/expenses') ;
                const data = await res.json() ;

                if(res.ok) {
                    setExpenses(data) ;
                }
            }

            fetchData() ;

        }, [expenses]
    )

   
    return(
        <>
                
                <div className="container">

                <div className="expenses">
                    {expenses && expenses.map( item => (
                        <Expense key= {item._id} expense = {item}  />
                    ))}
                </div>
                <div className="gap"></div>
                <Form />
                </div>
        </>
    )

    
}

export default Expenses;
