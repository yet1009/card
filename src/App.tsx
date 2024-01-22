import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home'
import TestPage from '@/pages/Test'
import CardPage from '@/pages/Card'
import ScrollToTop from '@shared/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </Router>
  )
}

export default App
