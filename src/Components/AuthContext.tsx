import {useContext, createContext, ReactNode, useState} from "react";

interface AuthContextType {
    user: {id: number, name: string} | null;
    login : ( user: {id:number; name: string}) => void;
    logout : () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [ user , setUser ] = useState<AuthContextType["user"]>(null)
    const login = (newUser: {id: number; name: string}) => setUser(newUser)
    const logout = () => setUser(null);
    return (
        <AuthContext.Provider value={{login,logout,user}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error ("useAuth must be used within an AuthProvider")
    return context;
}