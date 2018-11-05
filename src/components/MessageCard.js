import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import defaultProfileImg from '../images/default-profile-image.png';

const MessageCard = (props) => {
    const { date, profileImageUrl, text, username } = this.props;
    return (
        <div>
            <img src={profileImageUrl || defaultProfileImg} alt={username} height="100" width="100" className="timeline-img" />
            <div className="message-area">
                <Link to="/" >@{username} &nbsp;</Link>
                <span className="muted-text"> 
                    <Moment className="muted-text" format="DD MM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default MessageCard;
