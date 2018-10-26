// responsible for routing logic
import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';

const Main = (props) => {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' render={ (props) => <Homepage {...props} /> } />
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
