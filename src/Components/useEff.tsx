import React , {useEffect , useState} from "react";

const BasicEffect = () => {
    useEffect ( () => {
        console.log("Component mounted");
    } , [] );
    return null
}

interface User {
    email : string;
    id : number;
    name : string;
    username : string;
}

const FetchUser = () => {
    const [user, setUser] = useState<User[]>([]);

    useEffect ( () => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data: User[] = await response.json();
                setUser(data);
            }catch (e) {
                console.error("Typescript error",e);
            }
        }
        fetchUser().then()
    } , [] );
    return (
        <div>
            <h1>User List</h1>
            <table border="4">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>UserName</th>
                </tr>
                </thead>
                <tbody>
                {user.map((user) => (
                    <tr key={user.id}>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

interface Post {
    id: number;
    title: string;
    body: string;
}
const FetchPost = () => {
    const [post, setPost] = useState<Post[]>([]);
    const [loading , setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect ( () => {
        const fetchPost = async () => {
            try{
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!response.ok) throw new Error("Error ")
                const data: Post[] = await response.json();
                setPost(data);
            }catch (e){
                setError(e instanceof Error ? e.message : "Unknown error");
            }finally {
                setLoading(false);
            }
        }
        fetchPost();
    } , [] );
    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error : {error}</div>;

    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {post.map((post) => (
                    <li key={post.id}>{post.title}{post.body}</li>

                ))}
            </ul>
        </div>
    )
}

export {BasicEffect, FetchUser, FetchPost}