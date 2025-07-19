import React from 'react'

const ModalComponent = ({show, onClose, title, message }) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex='-1' role='dialog' style={{backgroundColor : show ? 'rgba(0,0,0,0.5)' : "transparent"}}>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header'>

                    <h5 className={`modal-title w-100 text-center fw-bold ${title === "success" ? "text-success" : "text-danger"}`}>{title}</h5>

                    <button type='button' className='btn-close' onClick={onClose}></button>

                </div>
                <div className='modal-body'>
                    <p>{message}</p>

                </div>
                <div className='modal-footer'>
                    <button className='btn btn-secondary' type='button' onClick={onClose}>Close</button>

                </div>

            </div>

        </div>

    </div>
  )
}

export default ModalComponent