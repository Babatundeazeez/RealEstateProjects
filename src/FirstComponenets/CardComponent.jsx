import React from 'react'

const CardComponent = ({title, image, description,cardClass="",textClass=""}) => {
  return (
    <div className={`card rounded shadow card-hover ${cardClass}`}>

        <div className='card-body'>
          <div className='d-flex justify-content-center align-items-center mb-3'>
          {image && <img src={image} alt="image" className="imgcolor " style={{maxWidth: "50px", height: "auto"}}/>}
          </div>
          
            <h5 className={`card-title d-flex justify-content-center align-items-center mb-3 ${textClass}`}>{title}</h5>
            <p className={`card-text ${textClass}`}>{description}</p>

        </div>

    </div>
  )
}

export default CardComponent