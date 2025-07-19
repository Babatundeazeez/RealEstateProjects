import React, { useEffect, useState } from 'react'
import RentFlat from '../FlatProperty/RentFlat'
import DisplaProperty from '../FlatProperty/DisplaProperty'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blogs = () => {

  const [blogContent, setBlogContent] = useState()
  const [blogLoading, isblogLoading] = useState(false)

  
const blogPage = async() =>{

  const blogURL = import.meta.env.VITE_BlogPost_Url
  console.log(blogURL);
  
  const token = localStorage.getItem("accessToken")
  isblogLoading(true)
  try {
    const res = await axios.get(`${blogURL}`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    setBlogContent(res.data.blogPost)
    console.log(res.data);
    
    
  } catch (error) {
    console.log(error, "Failed to fetch blog post");
    
  }
   finally{
    isblogLoading(false)
  }

}

useEffect(()=>{
  blogPage()
},[])






  return (
    <div className='container-fluid page-image'>
    <div className='container'>
       <div style={{marginTop : "120px"}}>
       <h4 className='text-center'>Welcome to Blog page</h4>
       </div>
       {/* <RentFlat /> */}
       {/* <DisplaProperty /> */}

       <div className='row mt-5'>
        
        {
          blogLoading ? (
            <p className='text-center'>Loading Blogs Post ...............</p>
          ) : (
            <div className='row'>
             {
               Array.isArray(blogContent) && blogContent.length > 0 ? (
                blogContent.map((blogs) => (
                  <div className='col-md-4  mb-4' key={blogs._id}>
                    <div className='card h-100 shadow-sm border-0 property-card'>
                      <Link to={`/singleBlogPost/${blogs._id}`} className='myStyle'>
                      <img src={blogs.image} 
                      alt="blog-image"
                      className='card-img-top' 
                      style={{ height: "200px", objectFit: "cover" }} />

                      <div className='card-body'>
                        <h4 className='card-title'><strong>Title : </strong>{blogs.title}</h4>
                        <p className='card-text'><strong>Content : </strong>{blogs.content.slice(0, 80)}..... <button className='btn btn-success'>Read More...... </button></p>
                        
                      </div>
                      <div className='card-footer bg-transparent'>
                      <p className='card-date'><strong>Date : </strong>{new Date(blogs.createdAt).toLocaleDateString("en-US", {
                          year : "numeric",
                          month : "long",
                          day : "numeric"
                        })}</p>
                      </div>
                      </Link>

                    </div>

                  </div>
                ))
              ) : (
                <p>No Blog Post</p>
              )
             }
            </div>
          )
        }
          
        


       </div>
       
    </div>
    </div>
  )
}

export default Blogs