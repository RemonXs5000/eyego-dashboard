import React, { useState, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthenticationContext';

export default function LoginPage() {
   const { login } = useAuth(); 
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
      e.preventDefault();
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/overview");
      } catch (error) {
        setError("Email/password not Valid Failed to Login");
        setLoading(false);
      }
  
      setLoading(false);
    }


  return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 relative z-20">
          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Login to Your Account</h2>
            {/* Show Error Msg */}
            {error && (
               <div className='bg-red-300 text-red-700 py-2 px-2 rounded-lg my-2'>{error}</div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  ref={emailRef}
                  
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  ref={passwordRef}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition duration-200 disabled:bg-gray-500 disabled:text-gray-900"
                disabled={loading}
              >
                Login
              </button>
            </form>
    
            <p className="mt-4 text-sm text-center text-gray-400">
              Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register</Link>
            </p>
          </div>
        </div>
      );
    }
