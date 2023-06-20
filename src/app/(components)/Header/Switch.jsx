'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const activeLight = resolvedTheme === 'light' ? "switch active" : "switch";
    const activeDark = resolvedTheme === 'dark' ? "switch active" : "switch";

    const onClickLight = () => setTheme("light");
    const onClickDark = () => setTheme("dark");
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null
   
    return (
        <div className="switcher-theme" style={{ zIndex: "99999" }}>
            <button 
                onClick={ onClickLight}
                className={activeLight}
            >
                Light
            </button>
            <button 
                onClick={onClickDark}
                className={activeDark}
            >
                Dark
            </button>
        </div>
    );
};

export default ThemeChanger;
