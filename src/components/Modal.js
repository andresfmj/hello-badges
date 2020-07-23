import React from 'react'
import ReactDOM from 'react-dom'

import "./styles/Modal.css"

function Modal(props) {

    if (!props.isOpen)
        return null

    let modal = (
        <div className='Modal'>
            <div className="Modal__container">
                <button onClick={props.toggleModal} className='Modal__close-button'>X</button>
                {props.children}
            </div>
        </div>
    )

    return ReactDOM.createPortal(modal, document.getElementById('modal'))
}

export default Modal