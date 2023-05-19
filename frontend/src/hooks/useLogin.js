import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('https://joshuaabulu-api.onrender.com/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            setIsLoading(false)
            dispatch({
                type: 'login',
                payload: json
            })
            localStorage.setItem('user', JSON.stringify(json))
        }
    }

    return {login, error, isLoading}
}