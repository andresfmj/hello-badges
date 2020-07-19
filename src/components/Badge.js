import React from 'react'

import './styles/Badge.css'
import logo from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={logo} alt="Logo de la App" />
                </div>

                <div className='Badge__section-name'>
                    <img className='Badge__avatar' src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>Andres <br /> Fernando</h1>
                </div>

                <div className='Badge__section-info'>
                    <h3>Frontend Engineer</h3>
                    <div>@andresf_mj</div>
                </div>

                <div className='Badge__footer'>
                    #HelloBadges
                </div>
            </div>
        )
    }
}

export default Badge