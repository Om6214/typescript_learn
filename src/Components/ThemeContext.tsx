import {createContext,useContext,useState,ReactNode} from "react";

interface ThemeContextType {
    theme : "light" | "dark";
    toggleTheme : () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const {theme, setTheme} = useState<"light" | "dark">("light")

    const toggleTheme = () => {
        setTheme((prevTheme)=> (prevTheme == "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme} toggleTheme={toggleTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}