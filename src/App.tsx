import React from "react";
// import UserProfile from "./Components/UserProfile.tsx";
// import AddUser from "./Tanstack/fetch.tsx";
// import UserLists from "./Tanstack/fetch.tsx";
import Card from "./Components/cards.tsx";
import Greeting from "./Components/useState.tsx";
import {CheckboxExample , Click , Dropdown , FormExample , TextInput} from "./Components/Click.tsx";
import {FetchUser} from "./Components/useEff.tsx";
import { useCounter,useFetch } from "./Components/Custom.tsx";
import AuthButton from "./Components/AuthButton.tsx";
import {AuthProvider} from "./Components/AuthContext.tsx";

// interface props  {
//     name: string,
//     age?: number,
// }
//
// interface User {
//     id: number,
//     name: string,
//     email: string,
// }

// const App: React.FC<props> =({ name,age }) => {
//     const [count, increment, decrement] = useCounter(10)
//     const [data, loading, error] = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")
//     if(loading) return <p>...Loading</p>
//     if(error) return <p>Error: {error}</p>
//         return (
//             <div>
//                 <h2>hello, {name}</h2>
//                 <p>your age is {age?? "Not provided"} </p>
//                 <Card>here is the new card</Card>
//                 <Greeting />
//                 <Click/>
//                 <TextInput/>
//                 <FormExample/>
//                 <Dropdown/>
//                 <CheckboxExample/>
//                 <FetchUser/>
//                 {count}
//                 <div className="flex flex-row">
//                     <button onClick={increment}>+</button>
//                     <button onClick={decrement}>-</button>
//                 </div>
//                 <ol>
//                     {
//                         data?.map((user) => (
//                             <li key={user.id}>{user.name} {user.email}</li>
//                         ))
//                     }
//                 </ol>
//                 {/*<FetchPost/>*/}
//                 <AuthProvider>
//                     <AuthButton/>
//                 </AuthProvider>
//
//             </div>
//         )
// }

const App = () => {
    return(
        <>
            <UserLists/>
        </>
    )
}

export default App;