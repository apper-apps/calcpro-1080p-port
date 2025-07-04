import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Calculator from '@/pages/Calculator'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App