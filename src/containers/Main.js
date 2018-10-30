// responsible for routing logic
import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = (props) => {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' render={ (props) => <Homepage {...props} /> } />
                <Route exact path='/signin' render={ (props) => {
                    return (
                        <AuthForm {...props} buttonText="Log In" heading="Welcome back." />
                    )
                } } />
                <Route exact path='/signup' render={(props) => {
                    return (
                        <AuthForm {...props} buttonText="Sign Up" heading="Join Twatter today." />
                    )
                }} />
            </Switch>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

//get props from router to component. components will be able to use history object to redirect
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Main)
);
