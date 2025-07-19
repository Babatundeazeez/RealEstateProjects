import React from 'react'

const Button = ({text, color="light", onClick, loading= false, disabled = false}) => {

  return (
    <div>
        <button onClick={onClick} className={`btn btn-${color}`} disabled={loading || disabled}  >

          {
            loading ? (
              <div>
                <span className='spinner-border spinner-border-sm me-2' role='status' aria-hidden="true"></span>
                Loading.............
              </div>
            ) : (
              text
            )
          }
          </button>

    </div>
  )
}

export default Button