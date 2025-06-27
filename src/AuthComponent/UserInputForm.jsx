import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const UserInputForm = () => {
    const {register, handleSubmit} = useForm()

    const userCreate = async(data) =>{
console.log(data);
// const userCreate = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("name", data.name);
  formData.append("location", data.location);
  formData.append("price", data.price);
  formData.append("contact", data.contact);
  formData.append("description", data.description);
  formData.append("image", data.image[0]); // file upload

  try {
    const res = await axios.post("http://localhost:1300/api/property", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Created:", res.data);
    alert("Property created successfully");
  } catch (err) {
    console.error("Error:", err);
    alert("Failed to create property");
//   }
};

    }
  return (
    <div className='container'>
         <div className='row'>
        <div className='col-ms-6 col-md-10'>
            <div className='card shadow'>
                <div className='card-body'>
                    <h3 className='card-title text-center mb-4'>UserInputForm</h3>
                    <form action="" className='form' onSubmit={handleSubmit(userCreate)}>
            
                          <div className='row'>
                                <div className='col-md-4 mb-3'>
                                        <label className='form-label' htmlFor="title">Title :</label>
                                        <input type="text" className='form-control' placeholder='Enter title' id='title' {...register("title")} />
                                 </div>
                                <div className='col md-4 mb-3'>
                                        <label className='form-label' htmlFor="name">Name :</label>
                                        <input type="text" className='form-control' placeholder='enter Name' id='text' {...register("text")} />
                                </div>
                             <div className=' col-md-4 mb-3'>
                                <label className='form-label' htmlFor="location">Location :</label>
                                <input className='form-control' type="text" name=""  placeholder='property location' id="location" {...register("location")}  />
                               
                            </div>

                            <div className='col-md-4 mb-3'>
                                <label className='form-label' htmlFor="price">Price :</label>
                                <input className='form-control' type="number" name=""  placeholder='Enter your price' id="price" {...register("price")} />
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label className='form-label' htmlFor="contact">Contact :</label>
                                <input className='form-control' type="number" name=""  placeholder='Your Phone number' id="contact" {...register("contact")} />
                            </div>
                            <div className='col-md-4 mb-3'>
                                <label className='form-label' htmlFor="image">Image :</label>
                                <input className='form-control' type="file" name="" id="image" placeholder='choose your image file' {...register("image")} />
                               
                            </div>

                            
                          </div>


                            <div className='mb-3'>
                                <label className='form-label' htmlFor="Description">Description :</label>
                                <textarea className='form-control' rows="4" name="" id="description" placeholder='describe what you need.......' {...register("description")} ></textarea>
                            </div>

                            <div>
                                <button className='btn btn-primary px-5'>Create </button>
                            </div>
                        </form>

                </div>

            </div>

        </div>

       </div>
        
    </div>
  )
}

export default UserInputForm