import React from 'react'

const Button = ({text, color="light", onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={`btn btn-${color}`}  >{text}</button>

    </div>
  )
}

export default Button