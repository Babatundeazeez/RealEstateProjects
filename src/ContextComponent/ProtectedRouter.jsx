import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProtectedRouter = () => {

    const {isAuthenticate} = useContext(authContext)
    const isAuth = isAuthenticate()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuth){
            toast.warning("You have to be logged in")
            navigate('/signUp')
        }
    }, [isAuth, navigate])
  return (

    isAuth ? <Outlet /> : null
            )
}

export default ProtectedRouter