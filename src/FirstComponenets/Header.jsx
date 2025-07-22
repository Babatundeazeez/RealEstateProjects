
import React, { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate, } from 'react-router-dom'
import { authContext } from '../ContextComponent/AuthContext'

const Header = () => {

    const {isAuthenticate} = useContext(authContext)
    const isAuth = isAuthenticate()
    const navigate = useNavigate()

   
    const logOut = () =>{
        localStorage.removeItem("accessToken")
        navigate("/")
        
    }

  return (
    
        <nav className=' navbar navbar-expand-lg navbar-dark p-1 mb-1 bg-primary fixed-top'>

            <div className='container-fluid'>
                <Link to={'/'} className='navbar-brand'>
                <img src="/image/realEstateLogo.jpg" alt="companyLogo" className='brandLogo' />
                </Link>

                <button type='button'  className='navbar-toggler' data-bs-toggle = "collapse" data-bs-target="#demo"><i className='fa fa-align-justify'></i></button>

                <div className='collapse navbar-collapse' id='demo'>

                    <ul className='navbar-nav m-auto fw-bold'>
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-link text-white'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/blogs'} className='nav-link text-white'>Blogs</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/property'} className='nav-link text-white'>Property</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/dashboard'} className='nav-link text-white'>DashBoard</Link>
                        </li>

                    </ul>

                   {
                    isAuth ? (
                        <div className='d-flex gap-2'>
                            <Button text="Explore our Property" color='secondary' />
                            <Button onClick={logOut} text="Log Out" color='info'/>
                        </div>
                    ) : (
                        <div className='d-flex gap-2'>

                    <Link to={'/signUp'}>
                    <Button text="Sign Up" color='secondary' />
                    </Link>
                    <Link to={'/signIn'}>
                    <Button text='Sign In' color='success' />
                    </Link>
                  
                   </div>
                    )
                   }

                </div>
                
              

            </div>

        </nav>
       
      

    
  )
}

export default Header