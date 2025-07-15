import React, { useContext, useEffect } from 'react'
import { authContext } from '../ContextComponent/AuthContext'
import { useParams } from 'react-router-dom'

const SingleDisProperty = () => {
    const {id} = useParams()
   const {singleProperty,mysingleproperty,singlePropertyLoading} = useContext(authContext)
   

   useEffect(()=>{
   mysingleproperty(id)
   },[])


  return (
    <div className='' style={{marginTop : "120px"}}>
        {
            singlePropertyLoading ? (
                <div>
                    <h3 className='text-center'>Loading.............................</h3>
                </div>
            ) : (
                <div>
                    {
                        singleProperty.lenght > 0 ? (
                            <div>
                                <h4>No Property found</h4>
                            </div>
                        ) : (
                            <div>
                                {
                                    <div className='row justify-content-center'>
                                         <div className="col-md-6 mb-4">
                                     <div className="card h-100 shadow">
                                     
                                       <img
                                         src={singleProperty.image}
                                         alt="imageHouse"
                                         className="card-img-top"
                                         style={{ height: "300px", objectFit: "cover" }}
                                       />
                                       <div className="card-body">
                                         <h4 className="card-title"><strong>Title: </strong>{singleProperty.title}</h4>
                                         <p className="card-text"><strong>Name:</strong>{singleProperty.name}</p>
                                         <p className="card-text"><strong>Description: </strong>{singleProperty.description}</p>
                                         <p><strong>Location:</strong> {singleProperty.location}</p>
                                         <p><strong>Price:</strong> ₦{singleProperty.price}</p>
                                         <p><strong>Contact:</strong> {singleProperty.contact}</p>
                                       </div>
                                       
                                     </div>
                                   </div>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default SingleDisProperty