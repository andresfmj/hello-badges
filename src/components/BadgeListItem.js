import React from 'react'

import './styles/BadgesList.css'

function BadgeListItem(props) {

    return (
        <React.Fragment>
            <div>
                <img className="BadgesListItem__avatar" src={props.badge.avatarUrl} alt={props.badge.twitter} />
            </div>
            <div className='font-weight-bold'>
                <div>{props.badge.firstName} {props.badge.lastName}</div>
                <div className='Twitter__name'>
                    <ul>
                        <li><span className='Twitter__logo'></span></li>
                        <li>
                            <a href={`https://twitter.com/${props.badge.twitter}`}>@{props.badge.twitter}</a>
                        </li>
                    </ul>
                </div>
                <div className='font-weight-light'>{props.badge.jobTitle}</div>
            </div>
        </React.Fragment>
    )
}

export default BadgeListItem
