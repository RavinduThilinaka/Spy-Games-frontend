import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter, logoGoogle, logoGithub, closeOutline } from "ionicons/icons";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-4 page-content">
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => navigate('/')}
          className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:rotate-90"
        >
          <IonIcon icon={closeOutline} className="text-3xl" />
        </button>
      </div>
      
      <div className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 border-opacity-30">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
              Create Account
            </h1>
            <p className="text-gray-400 mt-2">Join the ultimate gaming community</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full px-4 py-3 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500">or continue with</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[logoFacebook, logoTwitter, logoGoogle, logoGithub].map((icon, index) => (
                <button
                  key={index}
                  className="p-3 bg-gray-900 bg-opacity-50 rounded-lg hover:bg-yellow-500 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <IonIcon icon={icon} className="text-xl" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-yellow-400 hover:text-yellow-300 font-medium transition-all duration-300"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-opacity-10 p-4 text-center">
          <p className="text-sm text-yellow-300">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;