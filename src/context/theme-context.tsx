// context/theme-context.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'auto'

const ThemeContext = createContext({
  mode: 'auto' as ThemeMode,
  setMode: (_mode: ThemeMode) => {},
  toggleMode: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>('auto')

  const applyTheme = (mode: ThemeMode) => {
    const html = document.documentElement
    html.removeAttribute('data-theme')

    if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      html.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    } else {
      html.setAttribute('data-theme', mode)
    }
  }

  const setMode = (mode: ThemeMode) => {
    localStorage.setItem('theme', mode)
    setModeState(mode)
    applyTheme(mode)
  }

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null
    const initial = stored || 'auto'
    setMode(initial)
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
