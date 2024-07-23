import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (prefersLight ? 'light' : 'dark'));
    const toggleTheme = () => {
                const newTheme = theme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
    }
    
    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //         }, [theme]);
    //     }
    // const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    // const [theme, setTheme] = useState('dark');

    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('theme');
    //     if (savedTheme) {
    //         setTheme(savedTheme);
    //     } else if (prefersLight) {
    //         setTheme('light');
    //     }
    // }, [prefersLight]);

    // const toggleTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    //     localStorage.setItem('theme', newTheme);
    // };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext);
}