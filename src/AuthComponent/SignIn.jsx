import React from 'react'
import Button from '../FirstComponenets/Button'

const SignIn = () => {
  return (
    <div className='container'>
        <div className='row'>

        <div className='text-center'>
       <h4>Welcome to our Page</h4>
       <p>Kindly Sign in</p>
       </div>
       <div className='col-sm-4'>

       </div>
       <div className='col-sm-4'>
        <form action="" className='form border p-3'>
            <p>Kindly sign in with your credentials</p>
            <div className='mt-2'>
                <label className='form-label' htmlFor="email">Email :</label>
                <input className='form-control' type="email" id='email'placeholder='enter your email' />
            </div>
            <div className='mt-2'>
                <label className='form-label' htmlFor="password">Password :</label>
                <input className='form-control' type="password" id='password'placeholder='enter your password' />
            </div>
            <div className='mt-2'>
                <label className='form-label' htmlFor="password">Confirm Password :</label>
                <input className='form-control' type="password" id='password'placeholder='enter your password' />
            </div>
            <div className='mt-5'>
                <Button text='Sign In' color='success' />
            </div>
        </form>

       </div>
       <div className='col-sm-4'>

       </div>

       
        </div>
       
    </div>
  )
}

export default SignIn