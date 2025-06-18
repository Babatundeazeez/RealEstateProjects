import React from 'react'
import NigeriaState from './SecondComponents/NigeriaState'
import CardComponent from './FirstComponenets/CardComponent'
import SignUp from './AuthComponent/SignUp'

const MainBody = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6'>
              <CardComponent 
              title="Property in Nigeria"
              description="There are 29,700 available flats, houses, land and commercial property for rent in Nigeria. The property have been listed by estate agents who can be contacted using the contact information provided for each property listing. The list can be filtered by price, furnishing and recency." />
                
                <NigeriaState />
                

            </div>
            <div className='col-sm-6'>
              {/* <SignUp /> */}
            

            </div>

        </div>

    </div>
  )
}

export default MainBody