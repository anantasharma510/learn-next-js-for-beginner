async function userList() {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

export default async function page() {
    let users = await userList();
    console.log(users);
    return (
        <div>
            <h1>List of User Names</h1>
            {users.map((irwm) => (
                <div key={irwm.id}> {/* Add a key to each item for list rendering */}
                    <h2>User Name: {irwm.firstName}</h2> {/* Use correct property 'firstName' */}
                </div>
            ))}
        </div>
    );
}
