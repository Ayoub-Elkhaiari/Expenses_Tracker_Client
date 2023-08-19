import { useState } from 'react'
import { useExpenseContext } from '../hooks/useExpensesContext';

const Form = () => {

    const [expenses, setExpenses] = useExpenseContext() ;
    const [date, setDate] = useState('') ;
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0) ;
    const [emptyFields, setEmptyFields] = useState([])
    const [error, setError] = useState(null) ; // in the server we send an object with error property



    const handleSubmit = async(event) => {
        event.preventDefault() ;

        const res = await fetch('http://localhost:5000/api/expenses', {
            method : 'POST',
            body : JSON.stringify({date, category, description, amount}) ,
            headers : {
                "Content-Type" :"application/json",
            }
        })

        const data = await res.json() ;

        if(!res.ok) {
            setError(data.error)
            setEmptyFields(data.emptyFields);
        }else{
            // alert("expense added")
            setDate('');
            setCategory('')
            setDescription('')
            setAmount(0) 
            setError('') ;
            console.log(data)
            setEmptyFields([])
            setExpenses([...expenses, data]) 
            /* it work just fine without this one line
            bcz in array of dependencies in useEffect we already setting the state to change 
            whenever the expenses array change, just to be more accurate */
        }
    }

    return(



        <>
            <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <label>Date you need this expense : </label>
                    <input 
                    type="date"
                    value = {date}
                    onChange={e => setDate(e.target.value)}
                    className={emptyFields.includes('date') ? 'error': ''}  />
                </div>
                <div className='inputContainer'>
                    <label>Category : </label>
                    <input 
                    type="text"
                    value = {category}
                    onChange={e => setCategory(e.target.value)} 
                    className={emptyFields.includes('category') ? 'error': ''}  />
                </div>
                <div className='inputContainer'>
                    <label>Description : </label>
                    <input 
                    type="text"
                    value = {description}
                    onChange={e => setDescription(e.target.value)}
                    className={emptyFields.includes('description') ? 'error': ''}   />
                </div>
                <div className='inputContainer'>
                    <label>Amount : </label>
                    <input 
                    type="number"
                    value = {amount}
                    onChange={e => setAmount(e.target.value)} 
                    className={emptyFields.includes('amount') ? 'error': ''}  />
                </div>

            <button>Save</button>
            {error && (<h4>{error}</h4>)}
            

            </form>

        </>
    )
}

export default Form ;