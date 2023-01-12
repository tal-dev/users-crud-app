import axios from "axios"
import { useEffect, useState } from "react"
import User from "./User"

const api = "https://63bc6b1efa38d30d85c77b01.mockapi.io/users"

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await axios.get(api)
        setUsers(res.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return users.map(user => <User user={user} />)
}

export default Users