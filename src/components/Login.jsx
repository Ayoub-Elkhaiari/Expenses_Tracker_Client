import { useState } from "react"

const Login = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {

        e.preventDefault() ;

    }



    return (

        <form action="" onSubmit={handleSubmit}>

        <h3>Login</h3>

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


            <button>Login</button>
        </form>
    )
}

export default Login ;