
import axios from 'axios'
import Button from '../FirstComponenets/Button'
import { useForm } from 'react-hook-form'
// import { useState } from 'react'
// import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css";

const BlogContent = () => {
    
     const {register, handleSubmit} = useForm()
    //  const [richContent, setRichContent] = useState("");


    const blogPostURL = import.meta.env.VITE_BlogPost_Url

    const blogPostProperty = async(data) => {
        console.log(data);
        const formData = new FormData();
        formData.append("image", data.image[0]);
        formData.append("title", data.title);
        formData.append("content", data.content);
        // formData.append("content", richContent)
        
    
    //setIsBlogLoading(true)
    try {
        const res = await axios.post(`${blogPostURL}`, formData, {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
       console.log("Created=>",res.data);
       alert("Blog Post Created successfully")
       
        console.log(res.data);
        
        
    } catch (error) {
        console.log(error, "Failed to upLoad blog Post");
        alert("Failed to created Blog")
        
    }finally{
       // setIsBlogLoading(false)
    }

}


  return (
    <div className='row'>
        
            <div className='card shadow'>

                <div className='card-body'>
                    <form action="" className='form' onSubmit={handleSubmit(blogPostProperty)}>
                        <div>
                            <label className='form-label' htmlFor="image">Image :</label>
                            <input className='form-control' type="file" name="" id="image" placeholder='choose your image file' {...register("image")} />
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="title" className='form-label'>Title :</label>
                            <input className='form-control' type="text" id='title' placeholder='Enter your title' {...register("title")} />
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="content" className='form-label'>Content :</label>
                            {/* <ReactQuill value={richContent} onChange={setRichContent} theme='snow' /> */}
                            <textarea className='form-control' id="content" placeholder='Enter your content here....' {...register("content")}></textarea>
                          
                        </div>
                        <div className='mt-2'>
                            <input className='form-control' type="date"  id="createdAt" {...register("createdAt")} />

                        </div>
                        <div className='mt-4'>
                            <Button text="Create Blog Post" color='primary' />
                        </div>

                    </form>

                </div>

            </div>

    

    </div>
  )
}

export default BlogContent