import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div style={{ zIndex: "99999" }}>
            <button
                style={{
                    color: "white",
                    border: "1px solid white",
                }}
                onClick={() => setTheme("light")}
            >
                Light
            </button>
            <button
                style={{ color: "white", border: "1px solid white" }}
                onClick={() => setTheme("dark")}
            >
                Dark
            </button>
        </div>
    );
};

export default ThemeChanger;
