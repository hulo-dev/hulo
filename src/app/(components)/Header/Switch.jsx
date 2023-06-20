'use client';
import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeChanger = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
   // const activeLight = resolvedTheme == 'light' ? "switch active" : "switch";
  //  const activeDark = resolvedTheme == 'dark' ? "switch active" : "switch";
    //  const activeLight = resolvedTheme === 'light' ? {background:'var(--bg-switcher)', color:'var(--color-text-switcher)'} : {};
    //  const activeDark = resolvedTheme == 'dark' ? {background:'var(--bg-switcher)', color:'var(--color-text-switcher)'} : {};
    return (
        <div className="switcher-theme" style={{ zIndex: "99999" }}>
            <button 
                onClick={() => setTheme("light")}
               // className={activeLight}
                style={{
                    color:resolvedTheme === 'light' ? '#FFFFFF':' #202020',
                    background:resolvedTheme === 'light' ? '#202020':'#FFFFFF',
                }}
               
            >
                Light
            </button>
            <button 
                onClick={() => setTheme("dark")}
                style={{
                    color:resolvedTheme === 'dark' ? '#202020 ':' #FFFFFF',
                    background:resolvedTheme === 'dark' ? '#FFFFFF ':'#202020',
                }}
                
            >
                Dark
            </button>
        </div>
    );
};

export default ThemeChanger;
