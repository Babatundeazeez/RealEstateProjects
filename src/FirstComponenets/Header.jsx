
import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {

    const register = () =>{
        alert("Kindly register")
        
    }
  return (
    
        <nav className=' navbar navbar-expand-sm p-2 bg-primary sticky'>

            <div className='container-fluid'>
                <Link to={'/'} className='navbar-brand'>
                <img src="/image/realEstateLogo.jpg" alt="companyLogo" className='brandLogo' />
                </Link>

                <button type='button'  className='navbar-toggler' data-bs-toggle = "collapse" data-bs-target="#demo"><i className='fa fa-align-justify'></i></button>

                <div className='collapse navbar-collapse' id='demo'>

                    <ul className='navbar-nav m-auto fw-bold gap-3'>
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
                   <div className='d-flex gap-2'>
                    <Link to={'/signUp'}>
                    <Button text="Sign Up" color='secondary' />
                    </Link>
                    <Link to={'/signIn'}>
                    <Button text='Sign In' color='success' />
                    </Link>
                   {/* <button className='btn btn-secondary'>
                    <Link to={'/signUp'}>Sign Up</Link>
                    </button> */}
                   {/* <button className='btn btn-info ms-2'>Sign In</button> */}
                   {/* <Button text="Sign Up" onClick={register}  />
                   <Button text="Sign In" color='success' onClick={()=>{alert("Welcome to our page")}} /> */}
                   </div>

                </div>
                
              

            </div>

        </nav>
       
      

    
  )
}

export default Header