import React from 'react'
import { Link } from 'react-router-dom'

import header from '../images/badge-header.svg'

import './styles/Badges.css'
import BadgesList from '../components/BadgesList'

import api from '../api'

class Badges extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
        console.log('1. constructor()')
    }

    componentDidMount() {
        console.log('3. componentDidMount()')
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.list()
            this.setState({ loading: false, error: null, data: data })
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()')
        console.log({
            prevProps: prevProps,
            prevState: prevState
        })
        console.log({
            props: this.props,
            state: this.state
        })
    }


    componentWillUnmount() {
        console.log('6. componentWillUnmount()')
        clearTimeout(this.timeoutId)
    }


    render() {
        console.log('2. render()')

        if (this.state.loading) {
            return 'Loading...'
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        return (
            <React.Fragment>
                <div className='Badges'>
                    <div className="Badges__hero">
                        <img className='Badges_conf-logo' src={header} alt="Logo" />
                        <form className='form-inline'>
                            <label className='sr-only'> Search</label>
                            <div className="input-group mb-2 mr-sm-2 Badges__search">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className='form-control' placeholder='Search for badges...' name="search" />
                                <div className="input-group-append">
                                    <button className='btn btn-info' type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className='btn btn-primary'>
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <BadgesList badges={this.state.data} />
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Badges