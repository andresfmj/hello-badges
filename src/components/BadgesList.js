import React, { useState } from 'react';

import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

import BadgesListItem from '../components/BadgeListItem';


function useSearchBadges(badges) {
    const [query, setQuery] = useState('')
    const [filteredBadges, setFilteredBadges] = useState(badges)

    // const filteredQuery = badges.filter(badge => badge.twitter.toLowerCase().includes(query.toLowerCase()))
    React.useMemo(() => {
        const result = badges.filter(badge => badge.twitter.toLowerCase().includes(query.toLowerCase()))
        setFilteredBadges(result)
    }, [badges, query])

    return { query, setQuery, filteredBadges }
}


function BadgesList(props) {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    let queryForm = (
        <form>
            <label className='sr-only'> Search</label>
            <div className='input-group mb-2 mr-sm-2 BadgesList__search'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>@</div>
                </div>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search for badges...'
                    autoComplete='off'
                    value={query}
                    onChange={e => {
                        console.log(e.target.value)
                        setQuery(e.target.value)
                    }}
                />
            </div>
        </form>
    )

	if (filteredBadges.length === 0) {
		return (
			<div className='text-center'>
                {queryForm}
				<h3>No se encontró ningun Badge</h3>
				<Link className='btn btn-primary' to='/badges/new'>
					Create a new Badge
				</Link>
			</div>
		);
	}

	return (
		<div className='BadgesList'>
            {queryForm}
			<ul className='list-unstyled'>
				{filteredBadges.map((badge) => (
					<li key={badge.id} className='BadgesListItem'>
						<Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
							<BadgesListItem badge={badge} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BadgesList;
