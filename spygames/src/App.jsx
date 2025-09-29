import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Brand from './components/Brand/Brand';
import Wrapper from './components/Wrapper/Wrapper';
import Featured from './components/Featured/Featured';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import NewsLetter from './components/Newsletter/NewsLetter';
import Footer from './components/Footer/Footer';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';

// Component to conditionally render the Navbar
function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/signup' || location.pathname === '/login';
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="page-content">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="bg-white dark:">
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
          
          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />
          
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div  basename="/Spy-Games-frontend">
        <Layout />
      </div>
    </Router>
  );
}

export default App;