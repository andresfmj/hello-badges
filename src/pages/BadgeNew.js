import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'
import md5 from 'md5'

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
            await api.badges.create({
                ...this.state.form,
                avatarUrl: `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`
            })
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
                            <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} error={this.state.error} />
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                {badgeForm}
            </React.Fragment>
        )
    }
}


export default BadgeNew