import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to='/badges'>View badges</Link>
                </li>
                <li>
                    <Link to='/badges/new'>Create new badge</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Index