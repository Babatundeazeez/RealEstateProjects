import React, { useContext, useEffect } from 'react'
import Button from '../FirstComponenets/Button'
import { authContext } from '../ContextComponent/AuthContext'
import { useParams } from 'react-router-dom'

const SingleBlogPost = () => {
    const {singlePropertyPost, singleBlogContent, isBlog} = useContext(authContext)
    const {id} = useParams()

    useEffect(()=>{
        singlePropertyPost(id)
    }, [])

  return (
    <div className='container' style={{marginTop :"110px"}}>
       <div className='post'>
       <Button  text="Blog Post on Property in Nigeria"  color='primary'/>
       </div>
        {
            isBlog ? (
                <p>Loading.................</p>
            ) : (
                <div className='mt-5'>
                    {
                        singleBlogContent.lenght > 0 ? (
                            <p>No Blog Post here</p>
                        ) : (
                            <div>
                                {
                                    <div className='row justify-content-center'>
                                        <div className='col-md-10 mb-4 '>
                                            <div className='text-center'>
                                            <h1 >{singleBlogContent.title}</h1>
                                            <p className='card-date'><strong>Date :</strong>{new Date(singleBlogContent.createdAt).toLocaleDateString("en-US", {year : "numeric", month : "long", day : "numeric"})}</p>
                                            </div>
                                            <div className='card border rounded-3  shadow p-5 '>
                                                <img src={singleBlogContent.image}
                                                 alt="blogImage"
                                                 style={{height : "300px", objectFit : "cover"}}
                                                 className='card-img-top' />

                                                 <div className='card-body mt-5'>
                                                    <h3 className='card-title'><strong>Title :</strong>{singleBlogContent.title}</h3>
                                                    <p className='card-text'><strong>Content :</strong>{singleBlogContent.content}</p>
                                                    <hr />
                                                    

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

export default SingleBlogPost