import React from 'react'

const CardComponent = ({title, image, description,}) => {
  return (
    <div className='card'>
        <div className='card-body'>
          <img src={image} alt="" />
          {/* <img  alt={title} style={{height : "200px", objectFit : "cover"}} /> */}
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>

        </div>

    </div>
  )
}

export default CardComponent