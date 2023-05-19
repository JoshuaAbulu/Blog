import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {Link} from 'react-router-dom'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }

    return ( 
        <div className="flex flex-col items-center py-16">
             <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-1/2">
                <h1 className="text-2xl font-black text-center">Login</h1>

                <input 
                type="email"
                value={email}
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-black p-2"
                 />

                <input 
                type="password"
                value={password}
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-black p-2"
                 />

                 <button type="submit" disabled={isLoading} className="border-2 border-blue-600 p-1 text-lg">Login</button>
                 {error && <span>{error}</span>}

                 <span className="text-lg font-black">Don't have an account? 
                    <Link to='/blog/signup' className=" underline"> <em> Sign up </em></Link></span>
            </form>
        </div>
     );
}
 
export default LoginForm;