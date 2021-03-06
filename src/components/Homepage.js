// landing page
import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from '../containers/MessageTimeline';

const Homepage = ({currentUser}) => {

    if(!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>What's Happening?</h1>
                <h4>New to Twatter?</h4>

                <Link to='/signup' className="btn btn-primary">
                    Sign Up Here
                </Link>

            </div>
        )
    }

    return (
        <div>
            <MessageTimeline />
        </div>
    )
    
};

export default Homepage;