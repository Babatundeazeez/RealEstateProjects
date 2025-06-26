import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
  const myDashBoard = () =>{
    alert('You must sign Up before you have access to this page')
  }
  return (
    <div className='container'>
       <div className='' style={{marginTop : "110px"}}>
       <h5>Welcome to DashBoard</h5>
       <Link to="/dashboard">
      <button className='btn btn-primary'>Go to Dashboard</button>
      </Link>
       <h4>Are you a Property owner or a Developer or An Estate Agent</h4>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, excepturi aliquam. Quam quo quia voluptas excepturi! Temporibus a dicta voluptatum iure qui recusandae, praesentium magnam doloremque, cum facere, harum molestiae.</p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, excepturi aliquam. Quam quo quia voluptas excepturi! Temporibus a dicta voluptatum iure qui recusandae, praesentium magnam doloremque, cum facere, harum molestiae.</p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, excepturi aliquam. Quam quo quia voluptas excepturi! Temporibus a dicta voluptatum iure qui recusandae, praesentium magnam doloremque, cum facere, harum molestiae.</p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, excepturi aliquam. Quam quo quia voluptas excepturi! Temporibus a dicta voluptatum iure qui recusandae, praesentium magnam doloremque, cum facere, harum molestiae.</p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, excepturi aliquam. Quam quo quia voluptas excepturi! Temporibus a dicta voluptatum iure qui recusandae, praesentium magnam doloremque, cum facere, harum molestiae.</p>
      
       </div>
    </div>
  )
}

export default DashBoard