import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListinProperty = () => {
    const [approvedProperties, setApprovedProperties] = useState([])
    const [loading, setLoading] = useState(false)


    const approveURL = import.meta.env.VITE_Property_URL

        const getListingProperties = async() => {
            setLoading(true)
            try {
                 const res = await axios.get(`${approveURL}/approved`)
                 console.log("API response:", res.data.approvedProperty);
                 
                setApprovedProperties(res.data.approvedProperty)
            } catch (error) {
                console.log("Error fecthing approved properties", error);
                
                
            }finally{
                setLoading(false);
            }
        }

        useEffect(()=>{
            getListingProperties()

        },[])
  return (
    <div>
        <h3>Explore Available properties</h3>
        {
            loading ? (
                <p>Loading Properties........</p>
            ) : (
           <div className='row'>
            {
                 approvedProperties.map((property) => (
                     
                    <div className='col-md-4 mb-4' key={property._id} data={property}>
                        <div className="card h-100 shadow-sm p-1 border-0 property-card">
                        <Link to={`/singleProperty/${property._id}`} className='myStyle'>
                        {property.status === "approved" && (<span className='badge bg-success p-2'>Verified</span>)}
                                <img
                                    src={property.image}
                                    alt="imageHouse"
                                    className="card-img-top p-1"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                            <div className="card-body">
                                <h4 className="card-title"><strong>Title: </strong>{property.title}</h4>
                               
                                <p className="card-text"><strong>Name:</strong>{property.name}</p>
                                <p className="card-text"><strong>Description: </strong>{property.description}</p>
                                <p><strong>Location:</strong> {property.location}</p>
                                <p><strong>Price:</strong> ₦{property.price}.00</p>
                                <p><strong>Contact:</strong> {property.contact}</p>
                            
                            </div>
                            </Link> 

              
             </div>
    
                    </div>
                    
                ))
            }
           </div>
        )
        }

    </div>
  )
}

export default ListinProperty