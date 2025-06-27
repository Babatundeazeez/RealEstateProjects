
// import { createContext, useContext, useState } from "react"
// import { authContext } from "../ContextComponent/AuthContext"
// import axios from "axios"


// export const authContext = createContext()
// export const useAuth = () => useContext(authContext)

// const AuthProvider = ({children}) =>{

//     // const [disProperty, setDisProperty] = useState([])
//     // const [isProperty, setIsProptLoading] = useState(false)

//     // const dpropertyUrl = import.meta.env.VITE_Property_URL
//     // const addProperty = async()=>{
//     //     setIsProptLoading(true)
//     //     try {
//     //         const res = await axios.get(`${dpropertyUrl}`)
//     //         setDisProperty(res.data)
            
//     //     } catch (error) {
//     //         console.log("Failed to fetch properties",error);
            
//     //     }finally{
//     //         setIsProptLoading(false)

//     //     }
//     // }

//     const value ={
//         // disProperty,
//         // addProperty,
//         // isProperty


//     }
//     return (
//         <authContext.Provider value={value}>{children}</authContext.Provider>
//     )

// }
// export default AuthProvider