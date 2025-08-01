import React from 'react'
import CardComponent from '../FirstComponenets/CardComponent'
import UserForm from '../SecondComponents/UserForm'

const Home = () => {
  return (
   <div>
    <div className=''>
    <div className='myImages position-relative'>
      
      <div className='position-absolute top-0 start-0 w-100 h-100' style={{backgroundColor : "rgba(0,0,0,0.6)",zIndex : 1}}>
      </div>
   
   <div className='container-fluid position-relative py-5' style={{zIndex : 2}}>
     <div className='' style={{marginTop : "110px"}}>
     
     <h3 className='text-white lead text-center mb-4'>Find your New Property</h3>
     <div className='row'>
      <div className='col-lg-6 col-md-12 mb-4 col-sm-6'>

       <div className='mt-5 p-5' style={{marginLeft : "50px"}}>
       <h1 className='text-white fs-2 fw-bold'>
        Connecting You to Real Properties to Rent, Lease, or Buy, Real Quick.</h1>

       <p className='text-white'>We’re more than just a service. We’re your trusted partner in finding the perfect property. With expert guidance, personalized support, and a deep understanding of Nigeria real estate market, we make your property journey seamless and stress-free.</p>
       </div>

      </div>
      <div className='col-lg-6 col-md-12 col-sm-6'>
       <div className='bg-light p-2 rounded-shadow'>
       <UserForm />
       </div>

      </div>

     </div>
     
      
    
      <div>

      </div>
     </div>
  </div>
  {/* ///////////endoffirstlayer///////////////////// */}
 </div>
    </div>
    {/* ...................secondlayer......................... */}

 <div className='container'>
  <div className='d-flex justify-content-center'>
  <img className='' src="../image/image Sticker.jpeg" alt="sticker" style={{maxWidth : "100%", height : "auto"}}/>
  </div>
 </div>
 {/* .....................endsecondlayer............................................... */}

{/* .......................thirdlayer................................................................ */}
 <div className='container'>
  <div className='row mt-5 align-items-center'>
    <div className='col-md-6 mb-4'>

    <div className='card h-100 shadow-sm position-relative '>
    <img className='p-3 img-fluid rounded' src="../image/homee.webp" alt="imag" style={{height : "100%", width : "100%", objectFit : "cover"}} />

    <img src="../image/key-img.webp" alt="keyImg" className='rounded-circle position-absolute' style={{width : "200px", height : "200px", bottom : "5px", right : "0px", zIndex : "0", border : "4px solid white"}} />

    </div>
    

    </div>
    <div className='col-sm-6 '>
    <div className='p-5'>
      <h5 className='text-primary'>WHO WE ARE</h5>
      <h2 className='lead fw-10'>Simplifying Your Search for Homes in Nigeria</h2>
      <p className='mt-4'>At RentHouseSurulere, we’re reimagining how people find homes in the vibrant heart of Surulere, Lagos. Born from a desire to simplify the often stressful rental process, we are more than just a platform—we’re a trusted partner, connecting renters, landlords, and agents in a seamless and transparent way.</p>
      <p className='mt-4'>Our mission is simple: to make property rental and sales in Surulere and its environs effortless and enjoyable.</p>
      <button className='btn btn-primary mt-4'>Read more about us</button>

    </div>
   
    </div>
  
  </div>
  
 </div>
 {/* ///////////////////end thirdlayer///////////////////////////////////////// */}
 <div className='container mt-5'>
    <div className='row'>
         <div className='col-sm-6'>
            <h5 className="text-grey">WHAT SETS US APARTS ?</h5>
            <h1>Homes That Transform Your Living Experience</h1>
            <p>We focus exclusively on all GRA in Ibadan. From Jerico to Kolapo Ishola, we know the streets,      neighborhoods, and lifestyle that define this thriving community. Our deep local knowledge ensures we can   match you with homes that not only meet your budget but also align with your lifestyle and needs.
            </p>
            <p>Whether you are a young professional seeking convenience or a family looking for the perfect space to grow, babzeezrealestate property Ltd. is here to make your journey stress-free.</p>

         </div>
       <div className='col-sm-6'>
       <div className="row">

<div className="col-md-6 mb-4">
  <CardComponent  
      image="/image/socialMediaImage/houseicon.webp"
      title="100% Trusted Property"
      description="Say goodbye to fake agents and scams. Every listing on our platform is verified for authenticity, ensuring you can rent with confidence."
      cardClass = "bg-primary"
      textClass = "mt-3  text-white"

    />
</div>
<div className="col-md-6 mb-4">
     <CardComponent  
     image="/image/socialMediaImage/inspectionIcon2.webp"
     title="Inspection Support"
     description="Say goodbye to fake agents and scams. Every listing on our platform is verified for authenticity, ensuring you can rent with confidence."
     cardClass = "bg-primary"
     textClass = "mt-3  text-white"
     
     />
</div>
 <div className="col-md-6 mb-4">
     <CardComponent  
     image="/image/socialMediaImage/rentHouse2icon.webp"
     title="For Property Owners"
     description="Say goodbye to fake agents and scams. Every listing on our platform is verified for authenticity, ensuring you can rent with confidence."
     cardClass = "bg-primary"
     textClass = "mt-3  text-white"
     
     />
</div>
<div className="col-md-6 mb-4">
     <CardComponent  
     image="/image/socialMediaImage/markIcon.png"
     title="Neighborhood Insights"
     description="Say goodbye to fake agents and scams. Every listing on our platform is verified for authenticity, ensuring you can rent with confidence."
     cardClass = "bg-primary"
     textClass = "mt-3  text-white"
     
     />
</div>
</div>

     


    </div>



  </div>

  
 </div>



   
   
 </div>
 )
}

export default Home