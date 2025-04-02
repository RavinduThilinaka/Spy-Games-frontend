import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for BrowserRouter
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';



export default function App() {

  
  return (
    <Router> {/* Wrap everything in the Router */}
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <div className="bg-white dark:">
            {/* Main page components */}
            <Navbar />
            <Hero />
          </div>
        }
      />
      
    </Routes>
  </Router>
  )
}
