import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import SamplePage from './pages/Samplepage'
import AboutUsPage from './pages/AboutUsPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
