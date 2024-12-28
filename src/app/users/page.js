// async function userList() {
//     let data = await fetch("https://dummyjson.com/users");
//     data = await data.json();
//     return data.users;
// }

// export default async function page() {
//     let users = await userList();
//     console.log(users);
//     return (
//         <div>
//             <h1>List of User Names</h1>
//             {users.map((irwm) => (
//                 <div key={irwm.id}> {/* Add a key to each item for list rendering */}
//                     <h2>User Name: {irwm.firstName}</h2> {/* Use correct property 'firstName' */}
//                 </div>
//             ))}
//         </div>
//     );
// }
import gerUsers from "../../../services/getUsers"
export default async function page (){
    const getUserList = getUsers();
    const  users = await getUserList;
    console.log(users);
    return ( 
        <div>
            <h1> List of User Names</h1>
            {
                users.map((user)=>{
                    <h2>
                        <link href={`users/${user.id}`}>{user.name}</link>
                    </h2>
                })
            }
            </div>)
}