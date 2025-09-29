import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import components
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

// Layout component
function Layout() {
  const location = useLocation();

  // Remove base path for GitHub Pages
  const path = location.pathname.replace('/Spy-Games-frontend', '');
  const hideNavbar = path === '/signup' || path === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="page-content">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="bg-white">
                <Hero />
                <Brand />
                <Wrapper />
                <Featured />
                <Shop />
                <Blog />
                <NewsLetter />
                <Footer />
              </div>
            }
          />

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

// Main App component
function App() {
  return (
    <Router basename="/Spy-Games-frontend">
      <Layout />
    </Router>
  );
}

export default App;
