import React from 'react'
import RentFlat from '../FlatProperty/RentFlat'
import DisplaProperty from '../FlatProperty/DisplaProperty'

const Blogs = () => {
  return (
    <div className='container '>
       <div style={{marginTop : "110px"}}>
       <h5 className=''>Welcome to Blog page</h5>
       </div>
       {/* <RentFlat /> */}
       <DisplaProperty />
       
    </div>
  )
}

export default Blogs