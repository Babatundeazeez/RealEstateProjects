import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'


const ProtectedRouter = () => {

    const { isAuthenticate } = useContext(authContext)
    const isAuth = isAuthenticate()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!isAuth) {
    //         alert("You have to be logged in")
    //         // toast.warning("You have to be logged in")
    //         navigate('/signUp')
    //     }
    // }, [isAuth, navigate])


    // return (

    //     isAuth ? <Outlet /> : null
    // )
        if (!isAuth){
            alert("You have to be logged in");
            return <Navigate to="signUp" replace />
        }
        return <Outlet />

}

export default ProtectedRouter