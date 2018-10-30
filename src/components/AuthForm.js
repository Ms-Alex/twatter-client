import React, { Component } from 'react';

class AuthForm extends Component {

    state = {
        email: '',
        username: '',
        password: '',
        profileImageUrl: ''
    }

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText } = this.props;

        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <form onSubmit={this.handleSubmit} >
                        <h2>{heading}</h2>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthForm;