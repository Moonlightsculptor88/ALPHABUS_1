import React , {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext();

export default function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {

    const [currentUser, setCurrentUser]  =useState();

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChange(user =>{
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    

    const value = {
        currentUser,
        signup
    }

  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}
