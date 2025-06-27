import React, { useContext, useEffect } from 'react'
import { authContext } from '../ContextComponent/AuthContext'
//import { authContext } from './PropertyContext'

const DisplaProperty = () => {
    const {disProperty, addProperty,isProperty} = useContext(authContext)

    useEffect(()=>{
        addProperty()
    },[])
   // if(isProperty) return <p>Loading ........</p>
        
  return (
    // <div className='container'>

    //     {
    //         disProperty.map((props, index)=>{
    //             <div key={index}>
    //                 <img src={props.image} alt="image" style={{height : "200px", objectFit : "cover"}}/>
    //                 <h3>{props.title}</h3>
    //                 <p>{props.name}</p>
    //                 <p>{props.description}</p>
    //                 <p>{props.location}</p>
    //                 <p>{props.price}</p>
    //                 <p>{props.contact}</p>

    //             </div>

    //         })
    //     }


    // </div>
    <div className="container my-5">
    <h2 className="text-center mb-4">Available Properties</h2>
    {isProperty ? (
      <p className="text-center">Loading properties...</p>
    ) : (
      <div className="row">
        {disProperty.map((property, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img
                src={property.image}
                alt={property.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">{property.description}</p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> ₦{property.price}</p>
                <p><strong>Contact:</strong> {property.contact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default DisplaProperty