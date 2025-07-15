import React, { useEffect, useState } from 'react'
import UserInputForm from './UserInputForm'
import Button from '../FirstComponenets/Button'
import axios from 'axios'
import DisplaProperty from '../FlatProperty/DisplaProperty'
import BlogContent from '../SecondComponents/BlogContent'

const Admin = () => {

   const baseUrl = import.meta.env.VITE_Property_URL
 
  const [pendingProperties, setPendingProperties] = useState([])

  //fetch only pending property//////////////////
   const fetchPendingProperty = async () =>{

     try {
       const token = localStorage.getItem("accessToken")

       const res = await axios.get(`${baseUrl}/pending`,{
         headers : {
           Authorization : `Bearer ${token}`,
         }
       })
       setPendingProperties(res.data.pendingProperty)

      
    } catch (error) {
       console.log("Failed to fecth pending properties", error);
      
     }
   }

   console.log("pending Properties", pendingProperties);

   useEffect(()=>{
    fetchPendingProperty()
  }, [])
   


   const handleApprove = async(id) =>{
     const token = localStorage.getItem("accessToken");
      try {
      const res = await axios.patch(`${baseUrl}/approve/${id}`, {}, {
         headers : {
           Authorization : `Bearer ${token}`,
         }
       })
       console.log(res.data);
      
       alert("Property Approved successfully")
       console.log("Approved click", id);
       setPendingProperties( (prev) => prev.filter((property) => property._id !== id));
       
      
      
      } catch (error) {
       console.log(error);
       alert("Failed to Approve property")
      }
   }

   

  const handleDisapprove = async(id) =>{
    const token = localStorage.getItem("accessToken")
    try {
      const res = await axios.patch(`${baseUrl}/disapprove/${id}`, {}, {
        headers :{
          Authorization : `Bearer ${token}`,
        }
      });
      console.log(res.data);
      
      alert("Property disapproved")
      //getPendingProperty()
    } catch (error) {
      console.log(error, "Disaprroval error");
      alert("Failed to disapprove property")
      
      
    }

  }

  


  return (
    <div className='container'>
       <div className=''>
       <div className='row' style={{marginTop : "120px"}}>
            <h2 className='text-center'>Welcome to Admin Page</h2>
           <div className='col-sm-6'>
           <UserInputForm />
           </div>

            
             <div className='col-sm-6'>
              <h4 className='text-center'>Create a Blog Post here</h4>
              <BlogContent />
            
             </div>
        </div>

           <div className='row mt-5'>

              {
                Array.isArray(pendingProperties) && pendingProperties.length > 0 ? (

                
                  pendingProperties.map((property) => (
                    <div key={property._id} className='col-md-4 mb-4'>

                      <div className='card h-100 shadow'>
                        <img src={property.image} alt="property" className='card-img-top' style={{height: "200px", objectFit : "cover"}} />

                        <div className='card-body'>

                        <h5 className='card-title'><strong>Title:</strong>{property.title}</h5>
                        <p className='card-text'><strong>Name: </strong>{property.name}</p>
                        <p><strong>Location: </strong>{property.location}</p>
                       <p><strong>Price: </strong>{property.price}</p>
                       <p><strong>Contact: </strong>{property.contact}</p>
                        <p className='card-text'><strong>Description: </strong>{property.description}</p>
                       <div className='d-flex gap-3'>
                       <Button text="Approve" color='success' onClick={()=> handleApprove(property._id)} />
                       <Button text="DisApprove" color='warning' onClick={()=> handleDisapprove(property._id)} />
                       </div>

                      </div>
                      </div>
                    </div>
                  ))
                ) :(
                  <p className='text-center'>No Pending properties Available</p>
                ) }
                
              
             
            
             </div>

        </div>
        {/* <DisplaProperty /> */}

       </div>

     
       

    
  )
}


export default Admin