import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class BadgeNew extends React.Component {
    state = {
        loading: false,
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

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Form was submitted')
        console.log(this.state)

        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
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
            if (this.state.error) {
                badgeForm = <PageError error={this.state.error.message} />
            }
            badgeForm = (
                <div className="col-6">
                    <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} />
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} lastName={this.state.form.lastName} 
                                email={this.state.form.email} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} 
                                avatarUrl={this.state.form.avatarUrl} 
                            />
                        </div>
                        {badgeForm}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default BadgeNew