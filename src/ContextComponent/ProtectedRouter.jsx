import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { toast } from 'react-toastify'

const ProtectedRouter = (children) => {

    // const {user} = useAuth()
    // return user ? children  : <Navigate to="/signUp" />

    const {isAuthenticate} = useContext(authContext)
    const isAuth = isAuthenticate()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuth){
            alert("You have to be logged in")
           // toast.warning("You have to be logged in")
            navigate('/signUp')
        }
    }, [isAuth])
  return (

    isAuth ? <Outlet /> : null
            )

// const {user} = useAuth();
// const location = useLocation();
// const allowedRoles = ["owner", "developer","agent","admin"];

// if (!user) {
//     return <Navigate to="/signIn" state={{from: location}} replace />
    
// }
// if (!allowedRoles.includes(user.role?.toLowercase())) {
//     return <Navigate to="/unauthorized" />;
    
// }
// return children
}

export default ProtectedRouter