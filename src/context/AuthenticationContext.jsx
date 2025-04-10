import React, { createContext, useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword ,onAuthStateChanged , signOut ,signInWithEmailAndPassword } from "firebase/auth"
import auth from '../firebase/firebase';


const Authentication = createContext();

const AuthenticationProvider=({children})=>{
    const [userEmail , setUserEmail ] = useState("");
    const [loading, setLoading] = useState(true);
    
    const signUp =(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=> {
        return signOut(auth);
    }
    
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(newUser)=>{
            setUserEmail(newUser ? newUser.email : "");
            setLoading(false);
        })
        // useEffect cleanup 
        return ()=>{
            unsubscribe();
        }
    },[])

    const value = {userEmail, loading,signUp ,logOut ,login }
    return <Authentication.Provider value={value}>
        {!loading && children}
    </Authentication.Provider>
}


export const useAuth =()=>{
    return useContext(Authentication)
}

export default AuthenticationProvider ; 

