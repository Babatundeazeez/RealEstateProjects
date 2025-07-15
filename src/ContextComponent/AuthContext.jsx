import { createContext, useContext, useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"


export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) =>{

    const [states, setStates] = useState([])
    const [selectedState, setSelectedState] = useState("")

    // const [property, setProperty] = useState([])
    // const [propertyLoading, setIsPropertyLoading] = useState(false)

    const [verifyData, setVerifyData] = useState()
    const [verifyAccount, setVerifyAccount] = useState(false)

    const [singleProperty, setSingleProperty] = useState([])
    const [singlePropertyLoading, setSinglePropertyLoading] = useState(false)

    const [disProperty, setDisProperty] = useState([])
    const [isProperty, setIsProptLoading] = useState(false)

    const [singleBlogContent, setSingleBlogContent] = useState([])
    const [isBlog, setIsBlogLoading] = useState(false)

    


  


    //////////////////////////////////////////////////////////////
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

const propertyFile = import.meta.env.VITE_Property_URL
    // const propertyDisplay = async() =>{
    //     setIsPropertyLoading(true)
    //     try {
    //         const res = await fetch(`${propertyFile}`)
    //         console.log(res);
    //         const data = await res.json()
    //        // console.log(data);
    //         setProperty(data)

            
    //     } catch (error) {
    //         console.log("error while getting the listed property",error);
            
    //     }finally{
    //         setIsPropertyLoading(false)
    //     }
    // }
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
///////verification ends here /////////////////////////

/////////////This is display property function/////////////////////////////////////////


const dpropertyUrl = import.meta.env.VITE_Property_URL
const addProperty = async()=>{
    setIsProptLoading(true)

    try {
        const res = await axios.get(`${dpropertyUrl}`)
        setDisProperty(res.data.myProperty)
        console.log(res.data);
        
        
    } catch (error) {
        console.log("Failed to fetch properties",error);
        
    }finally{
        setIsProptLoading(false)

    }
}


///////////////////////////////////////////////////////////


const mysingleproperty = async(id) =>{
    
    setSinglePropertyLoading(true)
    try {
        const res = await axios.get(`${dpropertyUrl}/${id}`)
        if (!res){
            throw new Error("Failed to fetch property")
        }
        
        setSingleProperty(res.data.singleProperty)
         console.log(res.data);
        
        
    } catch (error) {
        console.log(error);
        
    }finally{
        setSinglePropertyLoading(false)
    }

}

//SingleblogPost///////////////////
const blogPostURL = import.meta.env.VITE_BlogPost_Url

const singlePropertyPost = async(id) =>{
    setIsBlogLoading(true)
    try {
        const res = await axios.get(`${blogPostURL}/${id}`)
        if (!res){
            throw new Error("Failed to get blog post");
            
        }
        setSingleBlogContent(res.data.singleBlogPost)
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
        
    }finally{
        setIsBlogLoading(false)
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
        verifyAccount,
        // property,
        // propertyDisplay,
        // propertyLoading,
        
        disProperty,
       // getApprovedProperty,
        addProperty,
        isProperty,

        mysingleproperty,
        singleProperty,
        singlePropertyLoading,

        singlePropertyPost,
        singleBlogContent,
        isBlog
        

       
    }
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )

    

}
export default AuthProvider
