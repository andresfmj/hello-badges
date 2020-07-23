import React from 'react'
import { Link } from 'react-router-dom'

import header from '../images/badge-header.svg'

import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

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

        this.intervalId = setInterval(this.fetchData, 5000)
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
        clearInterval(this.intervalId)
    }


    render() {
        console.log('2. render()')

        let badgeContainer = null

        if (this.state.loading && !this.state.data) {
            badgeContainer = <PageLoading />
        } else {
            badgeContainer = (
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
            )
        }

        if (this.state.error) {
            // return `Error: ${this.state.error.message}`
            badgeContainer = <PageError error={this.state.error} />
        }

        return (
            <React.Fragment>
                <div className='Badges'>
                    <div className="Badges__hero">
                        <img className='Badges_conf-logo' src={header} alt="Logo" />
                    </div>
                </div>

                {badgeContainer}
            </React.Fragment>
        )
    }
}

export default Badges