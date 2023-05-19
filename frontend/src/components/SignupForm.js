import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import {Link} from 'react-router-dom'

const SignupForm = () => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(firstName, lastName, email, password)
    }

    return ( 
        <div className="flex flex-col items-center py-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-1/2">
                <h1 className="text-2xl font-black text-center">Sign Up</h1>

                <input 
                type="text"
                value={firstName}
                placeholder="First name..."
                onChange={(e) => setFirstName(e.target.value)}
                className="border-2 border-black p-2"
                 />

                <input 
                type="text"
                value={lastName}
                placeholder="Last name..."
                onChange={(e) => setLastName(e.target.value)}
                className="border-2 border-black p-2"
                 />

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

                 <button type="submit" disabled={isLoading} className="border-2 border-blue-600 p-1 text-lg">Sign up</button>
                 {error && <span>{error}</span>}

                 <span className="text-lg font-black">Already have an account? 
                    <Link to='/blog/signup' className=" underline"> <em> Login </em></Link></span>
            </form>
        </div>
     );
}
 
export default SignupForm;