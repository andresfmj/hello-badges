import React from 'react'

import './styles/BadgesList.css'


class BadgesList extends React.Component {

    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => (
                        <li key={badge.id} className='BadgesListItem'>
                            <div>
                                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt={badge.twitter} />
                            </div>
                            <div className='font-weight-bold'>
                                <div>{badge.firstName} {badge.lastName}</div>
                                <div className='Twitter__name'>
                                    <ul>
                                        <li><span className='Twitter__logo'></span></li>
                                        <li>
                                            <a href={`https://twitter.com/${badge.twitter}`}>@{badge.twitter}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='font-weight-light'>{badge.jobTitle}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BadgesList