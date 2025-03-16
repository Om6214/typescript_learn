import React from "react"
import {useAuth} from "./AuthContext.tsx";

const AuthButton = () => {
    const { user , login , logout } = useAuth ();
    const newUser = {
        id: 2,
        name: "john doe",
    }

    return (
        <div>
            {
                user ? (
                    <>
                        <p>Hello {user.name}</p>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <button onClick={() => login (newUser)}>Login</button>
                )
            }
        </div>
    )
}
export default AuthButton;