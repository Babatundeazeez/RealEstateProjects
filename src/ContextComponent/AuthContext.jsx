import { createContext, useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"


export const authContext = createContext()
const AuthProvider = ({children}) =>{

    const [states, setStates] = useState([])
    const [selectedState, setSelectedState] = useState("")

    const [verifyData, setVerifyData] = useState()
    const [verifyAccount, setVerifyAccount] = useState(false)

    const handleChange = (e) =>{
        setSelectedState(e.target.value);
    }


    //function for getting all state//////////////////////////////
    const nigeriaState = import.meta.env.VITE_Nigeriastate_URL
    
    const fetchState = async() =>{
        try {
            const res = await fetch(`${nigeriaState}`)
            console.log(res);
               
            const data = await res.json()
            console.log(data);
            setStates(data)

              
        } catch (error) {
            console.log("Error while fecthing state",error); 
        }
    }
///////////////////////////////////////////////////////////////////
////////////////dashBoard Navigate/////////////////////////////////////////////////
const isAuthenticate = () =>{
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken){
        return true
    }
    else{
        return false
    }
}
//////////////////////////////////////////////////////////////////
///////vverification emailPage/////////////////////////////////////

const serverURL = import.meta.env.VITE_server_Url

const verificationAccount = async(token) =>{

    setVerifyAccount(true)
    try {
        console.log("verifyToken:", token);
        console.log("servalURL:", serverURL);
        
        const res = await axios.post(`${serverURL}/auth/verify/${token}`)
        //const res = await axios.post(`http://localhost:1300/api/auth/verify/${token}`)
      
       const data = res.data;
        console.log(data);
        console.log("Verification success", data);
        

        if (res.status === 200){
            setVerifyData(data);
        }
           
    } catch (error) {
        if (error.response){
            console.log("backend Error", error.response.data);
            setVerifyData(error.response.data)
            console.log(error.response.data.message);
            console.log(error);

        }
        else{
            console.log("An error occur during the request", error.message);
            setVerifyData({message: "An unexpected error occur"})
            
        }
        // console.log(error);
        // setVerifyData(error.response.data)
        // console.log(error.response.data.message);
        // console.log(error);
        
        
    }
    finally{
        setVerifyAccount(false)
    }

}
   



    const value = {
        states,
        fetchState,
        selectedState,
        handleChange,
        isAuthenticate,
        verificationAccount,
        verifyData,
        verifyAccount

       
    }
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )

    

}
export default AuthProvider
