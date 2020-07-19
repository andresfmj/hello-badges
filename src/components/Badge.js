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
                    {
                        this.props.avatarUrl
                            ? <img className='Badge__avatar' src={this.props.avatarUrl} alt={this.props.twitter} />
                            : (
                                <div className='Badge__profile_placeholder'>
                                    <p>Profile_Picture</p>
                                </div>
                            )
                    }
                    <h1>{this.props.firstName || 'FIRST_NAME'} <br /> {this.props.lastName || 'LAST_NAME'}</h1>
                </div>

                <div className='Badge__section-info'>
                    <h3>{this.props.jobTitle || 'Job Title'}</h3>
                    <div>@{this.props.twitter || 'Twitter'}</div>
                </div>

                <div className='Badge__footer'>
                    #HelloBadges
                </div>
            </div>
        )
    }
}

export default Badge