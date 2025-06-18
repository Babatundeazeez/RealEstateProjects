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



function App() {
  

  return (
    <>
    <BrowserRouter>
    <AuthProvider>

    <Header />
    <Header2 />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/property' element={<Property />} />
      <Route path='/verify/:token'  element={<VerificationPage />}/>
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route element={<ProtectedRouter />}>
      <Route path='/dashboard' element={<DashBoard />} />
      </Route>
      
    </Routes>
    
    
    

    <ToastContainer visibleToasts={0} position='bottom-left' />
    </AuthProvider>
    </BrowserRouter>
  
    
    


  
    
      
       
    </>
  )
}

export default App
