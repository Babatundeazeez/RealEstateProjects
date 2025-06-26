import React, { useContext, useEffect } from 'react'
import { authContext } from '../ContextComponent/AuthContext'

const RentFlat = () => {

    const {property, propertyDisplay,propertyLoading} = useContext(authContext)

    useEffect(()=>{
        propertyDisplay()
    },[])

  return (
    <div className='container my-4' style={{paddingTop : "0px"}}>
        <div className='card1 row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4'>
                                {
                                    
                                   property.map((proper, index)=>(
                                         <div key={index} className='cards col '>
                                        
                                              <div className='card h-100 shadow-sm'>
                                              <h3 className=''> {proper.title}</h3>
                                               <div className='heads'>
                                               <img src= {proper.image} alt="houseImage"  className='card-img-top' style={{height : "200px", objectFit: "cover"}} />
                                                <div className='card-body'>
                                                <h4 className='card-title mb-1'>{proper.name}</h4>
                                                <p className='card-text mb-1'>{proper.location}</p>
                                                <p className='card-text mb-1'>{proper.description}</p>
                                                <h2 className='card-text mb-1'>{proper.price}</h2>
                                                <p className='card-text mb-1'>{proper.contact}</p>
                                                </div>
                                               </div>
                                              </div>

                                         </div>
                                   ))
                                }
                            </div>
      
    </div>
  )
}

export default  RentFlat