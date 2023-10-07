import { useState } from "react"

const Signup = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {

        e.preventDefault() ;

    }



    return (

        <form action="" onSubmit={handleSubmit}>

        <h3>Sign up</h3>

        <label htmlFor="">Email:</label>
        <input type="email"
         name="" id=""
         value={email}
         onChange={e => setEmail(e.target.value)} />


        <label htmlFor="">Password:</label>
        <input type="email"
         name="" id=""
         value={password}
         onChange={e => setPassword(e.target.value)} />


            <button>Sign up</button>
        </form>
    )
}

export default Signup ;