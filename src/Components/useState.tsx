import React , {useState} from "react";

type User = {
    age : number;
    name : string;
}

const Greeting = () => {
    const [user , setUser] = useState<User | null> (null);
    return (
        <div>
            {user ? (
                <>
                    <h3>Name : {user.name}</h3>
                    <h3>Age : {user.age}</h3>
                </>
            ):(
                <p>no data available</p>
            )}
            <button onClick={()=> setUser({ name : "Omnath", age: 20})}>update</button>
        </div>
    )
}
export default Greeting;