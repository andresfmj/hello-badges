import React from 'react'

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'

import PageLoading from '../components/PageLoading'

import api from '../api'
import md5 from 'md5'

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({ loading: false, form: data})
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
        
    }


    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Form was submitted')
        console.log(this.state)

        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch(error) {
            console.log(error.message)
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = e => {
        this.setState({ 
            form: {
                ...this.state.form, // Con operador Spread
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        let badgeForm = <PageLoading />
        if (!this.state.loading) {
            badgeForm = (
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} lastName={this.state.form.lastName} 
                                email={this.state.form.email} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} 
                                avatarUrl={this.state.form.avatarUrl} 
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} error={this.state.error} />
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                {badgeForm}
            </React.Fragment>
        )
    }
}


export default BadgeEdit