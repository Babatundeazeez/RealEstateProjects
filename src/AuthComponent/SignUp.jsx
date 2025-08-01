
import {yupResolver} from '@hookform/resolvers/yup'
import Button from '../FirstComponenets/Button'
import {useForm} from 'react-hook-form'
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import ModalComponent from '../FirstComponenets/ModalComponent'




const SignUpSchema = yup.object({
    email : yup.string().email("Enter a valid Email Address").required("Email is required"),
    name : yup.string().required("Name is required").min(3, "Name must atleast minimum of 3 character").max(50, "Name can be more than 50 character in lenght"),
    password : yup.string().required("Password is required").min(6, "Password must be at least 6 character"),
    confirmPassword : yup.string().required("password is required").oneOf([yup.ref("password")], "password must match")

})



const SignUp = () => {
    const navigate = useNavigate()

   const {register, handleSubmit,reset, formState : {errors}} = useForm({
    resolver : yupResolver(SignUpSchema)
    
   })

   const [showModal, setShowModal] = useState(false)
   const [modalText, setModalText] = useState("")
   const [modalStatus, setModalStatus] = useState("")
   const [loading, setIsLoading] = useState(false)




  const userUrl = import.meta.env.VITE_User_URL

  const submitForm = async (data) => {
    setIsLoading(true)
   
    try {
        
                const res = await fetch(`${userUrl}/auth/signUp`, {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })
                const result = await res.json();
                console.log(result);

                if(res.ok){
                   // alert("SignUp successfully, Please check your email to verify your account")
                   setModalStatus("success")
                    setModalText("SignUp successfully, Please check your email to verify your account")
                    setShowModal(true)

                    toast.success('Sign Up successfully, please check you email to verify your account')
                    
                    reset()

                    setTimeout(()=>{
                        setShowModal(false)
                        navigate("/")
                    },3000)

                    
                }
                else{
                    setModalStatus("Unsuccessful")
                    setModalText(result.message || "Sign Up failed")
                    setShowModal(true)
                   // alert(result.message || "Sign Up failed")
                   // return;
                }
                    
            } catch (error) {
                console.log("Network Error", error);

                const message = error?.response?.data?.mesage || error.message || "Something went wrong, please try again later"
                setModalStatus("Unsuccessful")
                setModalText(message)
                setShowModal(true)
                
               // alert("Something went wrong, please try again later")
                //toast.danger("Something went wrong, please try again later")
                console.error("Network error", error)
                if(error?.response?.data?.msessage){
                    alert(`Error : ${error.response.data.message}`)
                } else if(error.message){
                    alert(`Error : ${error.message}`)
                }
                else{
                    alert("Something went wrong")
                }
                
            }finally{
                setIsLoading(false)
            }

}
  

  return (
    <div className='container-fluid page-image'>
    <div className='container'>
        <div className='row' style={{marginTop : "110px"}}>
            <div className='text-center'>
           
            <p>Kindly sign up here to get started</p>
            </div>
            <div className='col-sm-4'>

            </div>
            <div className='col-sm-4'>
            <form action="" className='form border p-3 mt-1 m-auto bg-primary' onSubmit={handleSubmit(submitForm)}>
            <h5>Create your own Account</h5>
            <div>
                <label htmlFor="name" className='form-label mt-1'>Name: </label>
                <input className='form-control' type="text" id='name' placeholder='Enter your full Name' {...register("name")} />
                <p style={{color: "red"}}>{errors.name && errors.name.message}</p>
            </div>
            <div>
                <label htmlFor="address" className='form-label mt-1'>Address: </label>
                <input className='form-control' type="text" id='address' placeholder='Enter your full Address' {...register("address")} />
                
            </div>
            <div>
                <label htmlFor="occupation" className='form-label mt-1'>Occupation: </label>
                <input className='form-control' type="text" id='occupation' placeholder='Enter your Occupation' {...register("occupation")}  />
            </div>
            <div>
                <label htmlFor="sex" className='form-label mt-1'>Sex: </label>
                <input className='form-control' type="text" id='sex' placeholder='Enter your gender' {...register("sex")} />
            </div>
            <div>
                <label htmlFor="number" className='form-label mt-1'>Phone: </label>
                <input className='form-control' type="text" id='number' placeholder='Enter your Phone' {...register("Phone")} />
            </div>
            <div>
                <label className='form-label mt-1' htmlFor="emil">Email:</label>
                <input className='form-control' type="email" id='email' placeholder='Enter your email address' {...register("email")} />
                <p style={{color: "red"}}>{errors.email && errors.email.message}</p>
            </div>
            <div>
                <label className='form-label mt-1' htmlFor="password">Password:</label>
                <input className='form-control' type="password" id='password' placeholder='Enter your password' {...register("password")} />
                <p style={{color: "red"}}>{errors.password && errors.password.message}</p>
            </div>
            <div>
                <label className='form-label mt-1' htmlFor="password">Confirm Password :</label>
                <input className='form-control' type="password" id='confirmPassword' placeholder='enter confirm password' {...register("confirmPassword")} />
                <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            </div>
            <div>
                <label className='form-label mt-1' htmlFor="role">Role :</label>
                <select className='form-control' id="role" {...register("role")}>
                    <option value="" disabled>-- Choose Role --</option>
                    <option value="admin">Admin</option>
                    <option value="owner">Owner Property</option>
                    <option value="developer">Developer</option>
                    <option value="agent">Agent</option>
                    <option value="buyer">Buyer</option>
                    

                </select>

            </div>

           <div className='mt-2'>
            {/* <button className='btn btn-info'>register Me</button> */}
           <Button text="Register" color='info' onClick={handleSubmit(submitForm)} loading={loading} />
           <ModalComponent 
                show={showModal}
                onClose={()=> setShowModal(false)}
                title={modalStatus}
                message={modalText} />
           </div>
        </form>

            </div>
            <div className='col-sm-4'>
            
            </div>

        </div>



        

    </div>
    </div>
  )
}

export default SignUp