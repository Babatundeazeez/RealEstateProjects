import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { authContext } from '../ContextComponent/AuthContext';


const VerificationPage = () => {
    const {token} = useParams()
    console.log(token);
    const { verifyData, verifyAccount, verificationAccount} = useContext(authContext)

    useEffect(()=>{
        verificationAccount(token)
    },[])

    
  return (
    <div className='container'>
        <div className='' style={{marginTop : "110px"}}>
        <h5>Welcome to verification Page</h5>
        <p>please kindly verify your account</p>
        {
            verifyAccount ? (
               <div>
                 <h3>verifying account..............</h3>
                 <p>welcome to verification account page</p>
               </div>
            ) : (
                <h3 style={{color: verifyData?.status ==="error" ? "red" : "green"}}>
                    {verifyData?.message}
                    </h3>
            )
        }
        </div>
    </div>
  )
}

export default VerificationPage