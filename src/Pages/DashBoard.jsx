import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const DashBoard = () => {
  const myDashBoard = () =>{
    alert('You must sign Up before you have access to this page')
  }
  return (
    <div className='container-fluid' style={{marginTop : "110px", minHeight : "100vh"}}>
      
     <div className='row'>
     <div className='text-center'>
       <h4>Welcome to DashBoard</h4>
       <p>Are you a Property Owner, Developer or Estate Agent?</p>
       </div>
      <div className='col-lg-3 col-md-4 col-sm-12 mb-4'>
        
      <div className='bg-light border-end p-3 h-100' style={{width : "300px"}}>
      
              <Link to="/dashboard/admin">
            <button className='btn btn-primary w-100 mb-3'>Go to Admin Page</button>
            </Link>

            <Link to="/dashboard/owner">
            <button className='btn btn-info w-100 mb-3'>Go to Owner Page</button>
            </Link>

            <Link to="/dashboard/developer">
            <button className='btn btn-success w-100 mb-3'>Go to Developer Page</button>
            </Link>

            <Link to="/dashboard/agent">
            <button className='btn btn-secondary w-100 mb-3'>Go to Agent Page</button>
            </Link>
     </div>
      </div>

      <div className='col-lg-9 col-md-8 col-sm-12  '>
      <div className='bg-light  rounded shadow-sm'>
      
      <Outlet />
      </div>
      </div>

     </div>
    </div>
  )
}

export default DashBoard