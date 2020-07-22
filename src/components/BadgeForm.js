import React from 'react'

class BadgeForm extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: '',
    //     twitter: ''
    // }

    // handleChange = e => {
    //     // console.log({ 
    //     //     name: e.target.name, 
    //     //     value: e.target.value 
    //     // })
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleClick = e => {
    //     console.log("button was clicked")
    //     console.log(this.state)
    // }


    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} type="text" name="firstName" value={this.props.formValues.firstName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} type="text" name="lastName" value={this.props.formValues.lastName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} type="email" name="email" value={this.props.formValues.email} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} type="text" name="jobTitle" value={this.props.formValues.jobTitle} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} type="text" name="twitter" value={this.props.formValues.twitter} className="form-control" />
                    </div>
                    {/* <div className="form-group">
                        <label>Gravatar URL</label>
                        <input onChange={this.props.onChange} type="text" name="avatarUrl" value={this.props.formValues.avatarUrl} className="form-control" />
                    </div> */}
                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && (
                        <p className='text-danger'>{this.props.error.message}</p>
                    )}
                </form>
            </div>
        )
    }
}

export default BadgeForm