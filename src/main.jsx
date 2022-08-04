// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/Globals.css'

// Pages
import Index from './pages/Index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </Router>
)
