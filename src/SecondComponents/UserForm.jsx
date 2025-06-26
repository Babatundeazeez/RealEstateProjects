import React from 'react'
import { useForm } from 'react-hook-form'

const UserForm = () => {

    const {register, handleSubmit} = useForm()


    const GuestUser = import.meta.env.VITE_GuestUser_Url

    const userSubmit = async(data) =>{
       // console.log(data);
        try {
            const res = await fetch(`${GuestUser}`, {
                method : "POST",
                headers : {
                    "Content-Type" :  "application/json"
                },
                body : JSON.stringify(data)
            })
            const myData = await res.json()
            console.log(myData);
            if (res.ok){
                alert('Your request has been sent successfully')
            }
            
            
        } catch (error) {
            console.log(error);
            
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
                                <input type="text" className='form-control' placeholder='Full Name' id='text' {...register("text")} />
                            </div>

                          <div className='row'>
                          <div className=' col-md-6 mb-3'>
                                <label className='form-label' htmlFor="email">Email :</label>
                                <input className='form-control' type="email"  id="email" placeholder='Your email address' {...register("email")}/>
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