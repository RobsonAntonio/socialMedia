import React, { createContext, useState } from 'react'

export const DarkmodeContext = createContext({
    theme: 'light'
})

export default function DarkmodeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <DarkmodeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </DarkmodeContext.Provider>
    )
}