import React from 'react'

import './styles/BadgesList.css'
import { Link } from 'react-router-dom'


class BadgesList extends React.Component {

    render() {
        if (this.props.badges.length === 0) {
            return (
                <div className='text-center'>
                    <h3>No se encontró ningun Badge</h3>
                    <Link className='btn btn-primary' to='/badges/new'>Create a new Badge</Link>
                </div>
            )
        }
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