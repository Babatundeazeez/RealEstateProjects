import React, { useContext, useEffect, useState } from 'react'
import { authContext } from './AuthContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import ModalComponent from '../FirstComponenets/ModalComponent'


const ProtectedRouter = () => {

    
    const [showModal, setShowModall] = useState(false)
    const [modalTextt, setModalTextt] = useState("")
    const [letRedireted, setLetRedirected] = useState(false)

    const { isAuthenticate } = useContext(authContext)
    const isAuth = isAuthenticate()
    const navigate = useNavigate()

    useEffect(()=>{
        
        if (!isAuth){
            setModalTextt("You have to be logged in, Kindly proceed to sign up page")
            setShowModall(true)

            setTimeout(()=>{
                //setShowModal(false)
                setLetRedirected(true)
                
            },3000);
        }
    }, [isAuth])

    
        if (letRedireted){
            return <Navigate to="/signUp" replace />
             
        }

        return (
            <div>
                <ModalComponent
                show={showModal}
                onClose={()=>{setShowModall(false)}}
                title="Unauthorized"
                message={modalTextt} />
                {isAuth && <Outlet />}
            </div>
        )

}

export default ProtectedRouter