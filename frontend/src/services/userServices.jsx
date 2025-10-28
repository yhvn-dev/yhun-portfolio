import axios from "axios"


export const getUsers = async () =>{
    try {
        const users = axios.get("http://localhost:5000")
        return users.data
    } catch (error) {
        console.error(error)
        throw error    
    }
}