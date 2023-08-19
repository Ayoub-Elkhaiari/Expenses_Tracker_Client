import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";

export const useExpenseContext = () => {


    const arr = useContext(ExpenseContext)
    if(!arr) {
        throw new Error("useExpenseContext must be used within a ExpenseProvider")
    }

    return arr ;
}

