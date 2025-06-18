import React, { useContext, useEffect } from 'react'
import { authContext } from '../ContextComponent/AuthContext'

const NigeriaState = () => {
    const {states, fetchState, selectedState, handleChange} = useContext(authContext)
   

    useEffect(()=>{
        fetchState()
    },[])


  return (
    <div className='mt-3'>
        <p>Nigeria state and Capital</p>

        {
             
                <select className='form-control' value={selectedState} onChange={handleChange}>
                    <option value="">-- Select a State --</option>
                    {
                        states.map((item, index )=>(
                            <option key={index} value={item.state}> {item.state} : {item.capital}</option>

                        ))
                    }
                   
                </select>
        }
         {selectedState && <p className='mt-3'>You selected : {selectedState}</p>} 
                
    </div>
  )
}

export default NigeriaState