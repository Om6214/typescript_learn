import {useTheme} from "./ThemeContext.tsx";

const ThemeSwitch = () => {
    const [theme, toggleTheme] = useTheme()
    return(
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "10px" }}>
            <p>Current theme : {theme}</p>
            <button onClick={toggleTheme}>
                Toggle theme
            </button>
        </div>
    )
}

export default ThemeSwitch;