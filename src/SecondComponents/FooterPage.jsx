import React from 'react'
import { Link } from 'react-router-dom'

const FooterPage = () => {
  return (
    <div className='container-fluid bg-secondary py-5 footer text-white'>
      <div className=''>
      <div className='row '>
        <div className='col-sm-12 col-md-4 mb-4 footer2  mt-5'>

          <div className=' d-flex align-items-center mb-3' >
          <div><img src="/image/realEstateLogo.jpg" alt="brandLogo" className='footerLogo' /></div>
          <h4 className='text-white ms-2'>BabzezRealEstateProperties</h4>
          </div>

          <div className='mt-3'>
          <p className='text-white'>At BabzezRealeEstate, we are reimagining how people find homes in the vibrant of GRA in Oyo state</p>
          </div>
          <div className='d-flex  gap-3 mt-3 flex-wrap'>
            <img src="/image/socialMediaImage/Facebook_Image.webp" alt="facebookImage" className='socialImage'/>
            <img src="/image/socialMediaImage/Instagram_Image.webp" alt="facebookImage" className='socialImage'/>
            <img src="/image/socialMediaImage/Linkedin_Image.webp" alt="facebookImage" className='socialImage'/>
            <img src="/image/socialMediaImage/Twitter_Image.webp" alt="facebookImage" className='socialImage'/>
            <img src="/image/socialMediaImage/Youtube_Image.webp" alt="facebookImage" className='socialImage'/>
          </div>
          
        </div>
        {/* //middlecoloum .................................*/}
        <div className='col-12 col-md-4 mb-4 mt-5 '>
          <div className='d-flex justify-content-around '>
          <div>
            <h6 className=' text-white'>Quik Links</h6>

            <Link className=' d-block footer-link mb-2 '>About Us</Link>
           
            <div className=' footer-border mb-3 mt-1'></div>

            <Link className=' d-block footer-link mb-2'>Contact Us</Link>

            <div className='footer-border mb-3 mt-1'></div>

            <Link className=' d-block footer-link'>Blogs</Link>
          </div>
          <div>

            <h5 className='text-white'>Find Us</h5>
            <Link className=' d-block footer-link mb-2'>Area Guild</Link>
            <div className='footer-border mb-3 mt-1'></div>

            <Link className='d-block footer-link mb-2'>Request Property</Link>
          </div>
          </div>

        </div>

        {/* //rightcoloum .................................*/}
        <div className='col-12 col-md-4 mb-4 mt-5'>
          <div className='input-group mb-3'>
          <input type="email" placeholder='Enter Your Email' className='form-control' />
          <button className='btn btn-primary' type='button'>Sign Up</button>
            
          </div>
          <p className='text-white mt-4'>Subscribe to our newsletter and get notified when we have new listing.</p>

          <div className='mt-3'>

           <div className='d-flex align-items-center gap-3 mt-3 mb-2'>
            <img src="/image/socialMediaImage/location2-Remo.png" alt="location-image" className='socialImage color me-2' />
            <p className='text-white'>52, Mesiogo Street, Alakia Adegbayi, Ibadan.</p>
           </div>
           <div className='d-flex align-items-center gap-3 mt-3 mb-2'>
           <img src="/image/socialMediaImage/GmailLogo.webp" alt="location-image" className='socialImage color me-2' />
           <p className='text-white '>babzrealestateproperty12@gmail.com</p>
           </div>
           <div className='d-flex align-items-center gap-3 mt-3'>
               <img src="/image/socialMediaImage/call3.webp" alt="call-logo" className='socialImage color me-2'/>
                <h6 className='text-white mb-0 '>+234-81-01-8066-61</h6>
           </div>

           
           
            
            
          </div> 

        </div>

      </div>
      <div className='bg-black py-3 p-4'>
       <div className='container-fluid  d-flex flex-column flex-md-row justify-content-between text-center text-md-start align-items-center'>
      <div>copyright @ 2025 BabzeezReal Estate Property limited, All right reserved.</div>
       <div>Terms of use | privacy</div>
       </div>

      </div>

      </div>

    </div>
  )
}

export default FooterPage