import React from 'react'
import DarkmodeProvider from './src/contexts/DarkmodeContext'
import Home from './src/Home'

export default function App() {
  return (
    <DarkmodeProvider>
      <Home />
    </DarkmodeProvider>
  )
}