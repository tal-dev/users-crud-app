import axios from "axios"
import { useEffect, useState } from "react"
import User from "./User"

const api = "https://63bc6b1efa38d30d85c77b01.mockapi.io/users"

const Users = () => {
    const [users, setUsers] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)

    const fetchUsers = async () => {
        try {
            const res = await axios.get(api)
            setUsers(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(api + "/" + id)
            setUsers(users.filter(user => user.id !== id))
        }
        catch (e) {
            if (e.response.status === 404) {
                alert("Please try later")
            }
        }
    }

    const addUser = async (e) => {
        e.preventDefault()
        const newUser = {
            name: e.target.elements.name.value,
            age: e.target.elements.age.value
        }
        try {
            const res = await axios.post(api, newUser)
            setUsers([res.data].concat(users))
            setIsFormOpen(false)
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            {!isFormOpen && <button onClick={() => setIsFormOpen(true)}>Create user</button>}
            {isFormOpen && <form onSubmit={addUser}>
                <input type="text" placeholder="name" name="name"/>
                <input type="number" placeholder="age" name="age"/>
                <button type="submit">Add</button>
            </form>}
            {users.map(ele => <User user={ele} onDeleteUser={deleteUser} />)}
        </>
    )
}

export default Users