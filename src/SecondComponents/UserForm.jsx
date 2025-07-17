import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from "yup"

const userFormSchema = yup.object({
    email : yup.string().email("Enter a valid email address").required("Email is required"),
    name : yup.string().required("Name is required")
})







const UserForm = () => {

    const {register, handleSubmit, reset, formState : {errors}} = useForm({
        resolver : yupResolver(userFormSchema)
    })


    const GuestUser = import.meta.env.VITE_GuestUser_Url

    const userSubmit = async(data) =>{
       // console.log(data);
        try {
            const res = await fetch(`${GuestUser}/generalUser`, {
                method : "POST",
                headers : {
                    "Content-Type" :  "application/json"
                },
                body : JSON.stringify(data)
            })
            const myData = await res.json()
            console.log(myData);
            if (res.ok){
                alert('Your request has been sent successfully, you will recieve notification after 24hours')
                toast.success("Your request has been sent successfully, you will recieve notification after 24hours")
                reset()
            }
            
            
        } catch (error) {
            console.log("something went wrong",error);
            
        }
        
    }


  return (
    <div className='container my-5'>
       <div className='row'>
        <div className='col-ms-6 col-md-8'>
            <div className='card shadow'>
                <div className='card-body'>
                    <h3 className='card-title text-center mb-4'>Tell us what you need and we will respond in 24 Hours</h3>
                    <form action="" className='form' onSubmit={handleSubmit(userSubmit)}>
            
                            <div className='mb-3'>
                                <label className='form-label' htmlFor="name">Name :</label>
                                <input type="text" className='form-control' placeholder='Full Name' id='name' {...register("name")} />
                                <p style={{color: "red"}}>{errors.name && errors.name.message}</p>
                            </div>

                          <div className='row'>
                          <div className=' col-md-6 mb-3'>
                                <label className='form-label' htmlFor="email">Email :</label>
                                <input className='form-control' type="email"  id="email" placeholder='Your email address' {...register("email")}/>
                                <p style={{color: "red"}}>{errors.email && errors.email.message}</p>
                            </div>

                            <div className='col-md-6 mb-3'>
                                <label className='form-label' htmlFor="Number">Number :</label>
                                <input className='form-control' type="number" name="" id="number" placeholder='Your Phone number' {...register("number")} />
                            </div>
                          </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor="Description">Description :</label>
                                <textarea className='form-control' rows="4" name="" id="description" placeholder='describe what you need.......' {...register("description")}></textarea>
                            </div>
                            <div>
                                <button className='btn btn-primary px-5'>Submit a Request</button>
                            </div>
                        </form>

                </div>

            </div>

        </div>

       </div>
    </div>
  )
}

export default UserForm