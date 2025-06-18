import React from 'react'

const CardComponent = ({title, image, description,}) => {
  return (
    <div className='card mt-3'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>

        </div>

    </div>
  )
}

export default CardComponent