const User = ({user, onDeleteUser}) => {
    return (
        <div className="card">
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <button className="delete-btn" onClick={() => onDeleteUser(user.id)}>Delete</button>
            <button className="delete-btn">Edit</button>
        </div>
    )
}

export default User