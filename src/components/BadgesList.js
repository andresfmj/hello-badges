import React from 'react'

import './styles/BadgesList.css'
import { Link } from 'react-router-dom'

import BadgesListItem from '../components/BadgeListItem'

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
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BadgesList