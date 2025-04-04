import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for BrowserRouter
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Brand from './components/Brand/Brand';
import Wrapper from './components/Wrapper/Wrapper';
import Featured from './components/Featured/Featured';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import NewsLetter from './components/Newsletter/NewsLetter';
import Footer from './components/Footer/Footer';



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
            <Brand/>
            <Wrapper/>
            <Featured/>
            <Shop/>
            <Blog/>
            <NewsLetter/>
            <Footer/>
          </div>
        }
      />
      
    </Routes>
  </Router>
  )
}
