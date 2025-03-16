import { useQuery} from "@tanstack/react-query";
import {useMutation,useQueryClient} from "@tanstack/react-query";

interface newUser {
    name: string;
    email: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    username?: string;
}

const fetchUser = async(): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json()
}

const addUser = async(user: newUser): Promise<newUser> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return response.json();
}

const AddUser = () => {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries ( { queryKey : [ "users" ] } ). then ( r => console.log(r))
        },
    });

    return (
        <div>
            <button onClick={()=> mutation.mutate({name: "john doe", email: "johndoe@gmail.com"})}>Add user</button>
        </div>
    )
}


const UserLists = () => {
    const {data: users, isLoading, error} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUser,
    });
    if(isLoading) return <p>...Loading</p>
    if(error) return <p>Error fetching</p>

    return (
        <div>
            <h2>UserList</h2>
            <ul>
                {
                    users?.map((user)=>(
                        <li key={user.id}>{user.name} {user.email} {user.username}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserLists;