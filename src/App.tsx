import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home'
import TestPage from '@/pages/Test'
import CardPage from '@/pages/Card'
import ScrollToTop from '@shared/ScrollToTop'
import SignupPage from '@/pages/Signup'
import SignInPage from '@/pages/SignIn'
import Navbar from '@shared/Navbar'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App
