import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
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
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
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
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BadgeNew