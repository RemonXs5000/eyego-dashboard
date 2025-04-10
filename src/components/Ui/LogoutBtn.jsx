import React, { useState } from 'react'
import {Power} from "lucide-react"
import { useAuth } from '../../context/AuthenticationContext'
import { useNavigate } from 'react-router-dom';


export default function LogoutBtn() {
    const {logOut} = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
     
    const handleLogout = async()=>{
       try {
        setError("")
        await logOut();
        navigate("/login")
       } catch (error) {
        setError(error)
        alert(error)
       }
    }
  return (
    <button 
        onClick={handleLogout}
        className='p-2 bg-transparent border text-gray-200 rounded-full cursor-pointer hover:bg-red-900 transition-colors duration-200 '>
        <Power size={18}/>
    </button>
  )
}
