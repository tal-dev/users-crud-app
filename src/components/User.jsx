const User = ({user}) => {
    return (
        <div className="card">
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
        </div>
    )
}

export default User