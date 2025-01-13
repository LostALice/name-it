import { useTheme } from "next-themes"
import { useState } from "react";


export function ThemeSwitch() {
    const { setTheme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState<string>("light")

    function changeTheme() {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
        setTheme(currentTheme)
    }

    return (
        <>
            <div>
                {(
                    currentTheme === "light" ?
                        <button
                            onClick={() => changeTheme()}
                            className="bold"
                        >
                            Light Mode
                        </button>
                        :
                        <button onClick={() => changeTheme()}
                            className="bold"
                        >
                            Dark Mode
                        </button>
                )}
            </div>
        </>
    )
}
