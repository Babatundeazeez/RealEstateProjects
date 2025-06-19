
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../FirstComponenets/Button'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const signInSchema = yup.object({
    email : yup.string().email("Enter a valid email address").required("email is required"),
    password : yup.string().min(6, "password must be atleast 6 character"),
   
    
})

const SignIn = () => {
    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver : yupResolver(signInSchema)

    })
    

    const signInUrl = import.meta.env.VITE_User_URL
    const navigate = useNavigate()

    const formSubmit = async(data) =>{
            console.log(data);
            try {
                const res = await fetch(`${signInUrl}/auth/signIn`,{
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(data)

                })
                //const results = await res.json()
               // console.log(results);
               const { message, accessToken, status} = await res.json()
               console.log(status);
               if (status === "success"){
                alert("sign In successfully, please proceed to dashboard")
                toast.success(message)
                localStorage.setItem("AccessToken", accessToken)
                navigate('/dashboard')

               }
                
            } catch (error) {
                console.log(error);
                
            }
            
    }
    
  return (
    <div className='container'>
        <div className='row'>

        <div className='text-center'>
       <h4>Welcome to our Page</h4>
       <p>Kindly Sign in</p>
       </div>
       <div className='col-sm-4'>

       </div>
       <div className='col-sm-4'>
        <form action="" className='form border p-3' onSubmit={handleSubmit(formSubmit)}>
            <p>Kindly sign in with your credentials</p>

            <div className='mt-2'>
                <label className='form-label' htmlFor="email">Email :</label>
                <input className='form-control' type="email" id='email'placeholder='enter your email' {...register("email")} />
                <p>{errors.email && errors.email.message}</p>

            </div>

            <div className='mt-2'>
                <label className='form-label' htmlFor="password">Password :</label>
                <input className='form-control' type="password" id='password' placeholder='enter password' {...register("password")} />
                <p>{errors.password && errors.password.message}</p>
            </div>

           
            <div className='mt-5'>
                <Button text='Sign In' color='success' onClick={handleSubmit(formSubmit)} />
            </div>
        </form>

       </div>
       <div className='col-sm-4'>

       </div>

       
        </div>
       
    </div>
  )
}

export default SignIn