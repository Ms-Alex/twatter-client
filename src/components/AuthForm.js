import React, { Component } from 'react';

class AuthForm extends Component {

    state = {
        email: '',
        username: '',
        password: '',
        profileImageUrl: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            console.log('Successful Log In')
        })
    }

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp } = this.props;

        return <div>
            <div className="row justify-content-md-center text-center">
              <form onSubmit={this.handleSubmit}>
                <h2>{heading}</h2>

                <label htmlFor="email">Email:</label>
                <input className="form-control" id="email" name="email" onChange={this.handleChange} value={email} type="text" />

                <label htmlFor="password">Password:</label>
                <input className="form-control" id="password" name="password" onChange={this.handleChange} type="password" />

                {
                    signUp && (
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input className="form-control" id="username" name="username" onChange={this.handleChange} value={username} type="text" />

                            <label htmlFor="image-url">Image URL:</label>
                            <input className="form-control" id="image-url" name="profileImageUrl" onChange={this.handleChange} value={profileImageUrl} type="text" />
                        </div>
                    )
                }

                <button type="submit" className="btn btn=primary btn-block btn-large">{buttonText}</button>

              </form>
            </div>
          </div>;
    }
}

export default AuthForm;