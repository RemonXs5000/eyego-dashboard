import React from 'react'
import { useLocation } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';


export default function Header() {
  const location = useLocation();
  const path = location.pathname.replace("/", "") || "Overview";

  return (
    <header className=" flex justify-between p-4 bg-gray-800 text-gray-200 shadow text-xl font-bold capitalize">
       <p>{path}</p> 
       <LogoutBtn/>
  </header>
  )
}
