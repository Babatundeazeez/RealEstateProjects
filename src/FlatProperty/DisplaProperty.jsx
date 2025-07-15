import React, { useContext, useEffect } from 'react'
import { authContext } from '../ContextComponent/AuthContext'
import { Link } from 'react-router-dom'
import Button from '../FirstComponenets/Button'
import axios from 'axios'


const DisplaProperty = () => {
    const {disProperty,addProperty, isProperty} = useContext(authContext)

    const baseUrl = import.meta.env.VITE_Property_URL

    const handleApprove = async(id) =>{
      const token = localStorage.getItem("accessToken");

       try {
       const res = await axios.patch(`${baseUrl}/approve/${id}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        console.log(res.data);
        
        alert("Property Approved successfully")
        
        console.log("Approved click", id);
        
        
       } catch (error) {
        console.log("Approver Error",error.response?.data || error.message);
        alert("Failed to Approve property")
       }
    }

    const handleDisapprove = async(id) =>{
      const token = localStorage.getItem("accessToken")
      try {
        const res = await axios.patch(`${baseUrl}/disaprrove/${id}`, {}, {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        });
        console.log(res.data);
        alert("Property disapproved")
        
        
       
      } catch (error) {
        console.log(error, "Disaprroval error");
        alert("Failed to disapprove property")
        
        
      }
  
    }




    useEffect(()=>{
      addProperty()
        //getApprovedProperty()
    },[])
  
        
  return (
    
    <div className="container my-5">
    <h2 className="text-center mb-4">Available Properties for Admin to Approve</h2>

    {
    isProperty ? (
      <p className="text-center">Loading properties...</p>
    ) : Array.isArray(disProperty) && disProperty.length > 0 ? (
      
        disProperty.map((property, index) => (
       
          <div className="col-md-4 mb-4" key={index}>

            <div className="card h-100 shadow">
           
              <img
                src={property.image}
                alt="imageHouse"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="card-title"><strong>Title: </strong>{property.title}</h4>
                <p className="card-text"><strong>Name:</strong>{property.name}</p>
                <p className="card-text"><strong>Description: </strong>{property.description}</p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> ₦{property.price}</p>
                <p><strong>Contact:</strong> {property.contact}</p>
               <div className='d-flex gap-3'>
               <Button text="Approve" color='success' onClick={()=>handleApprove(property._id)} />
               <Button text="DisApprove" color='danger' onClick={()=>handleDisapprove(property._id)} />
               <Button text="Pending" color='warning' />
               </div>
              </div>
              {/* <Link to={`/singleProperty/${property._id}`} className='myStyle'> </Link> */}
            </div>
          </div>
        
        ))
    
    ) : (
      <p>No Approved Property</p>
    )}
  </div>
  )
}

export default DisplaProperty