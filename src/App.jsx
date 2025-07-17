import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AuthProvider from "./ContextComponent/AuthContext"
import { ToastContainer } from "react-toastify"
import Header from "./FirstComponenets/Header"
import Header2 from "./FirstComponenets/Header2"
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Property from './Pages/Property'
import DashBoard from './Pages/DashBoard'
import SignUp from './AuthComponent/SignUp'
import SignIn from './AuthComponent/SignIn'
import ProtectedRouter from './ContextComponent/ProtectedRouter'
import VerificationPage from './AuthComponent/VerificationPage'
import Owner from './AuthComponent/Owner'
import Admin from './AuthComponent/Admin'
import Developer from './AuthComponent/Developer'
import Agent from './AuthComponent/Agent'
import SingleDisProperty from './FlatProperty/SingleDisProperty'
import SingleBlogPost from './FlatProperty/SingleBlogPost'
import FooterPage from './SecondComponents/FooterPage'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Header />
    <Header2 />

    <Routes>
       
        <Route element={<ProtectedRouter />}>
        <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/dashboard/owner' element={<Owner />} />
            <Route path='/dashboard/admin' element={<Admin />} />
            <Route path='/dashboard/developer' element={<Developer />} />
            <Route path='/dashboard/agent' element={<Agent />} />

        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route path='/property' element={<Property />} />
        <Route path='/singleProperty/:id' element={<SingleDisProperty />} />
        <Route path='/singleBlogPost/:id' element={<SingleBlogPost />} />

        <Route path='/verify/:token'  element={<VerificationPage />}/>
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
      

     
     

     
      
    </Routes>
    
    
    
<FooterPage />
    <ToastContainer visibleToasts={0} position='top-right' />
    </AuthProvider>
    </BrowserRouter>
  
    
    


  
    
      
       
    </>
  )
}

export default App
