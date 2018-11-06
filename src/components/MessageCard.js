import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import defaultProfileImg from '../images/default-profile-image.png';

const MessageCard = (props) => {
    const { date, profileImageUrl, text, username, removeMessage, isCorrectUser } = props;
    return (
        <div>

            <li className="list-group-item">
                <img src={profileImageUrl || defaultProfileImg} alt={username} height="100" width="100" className="timeline-img" />
                <div className="message-area">
                    <Link to="/" >@{username} &nbsp;</Link>
                    <span className="text-muted">
                        <Moment className="text-muted" format="Do MMM YYYY">
                            {date}
                        </Moment>
                    </span>
                    <p>
                        {text}
                    </p>
                    {isCorrectUser && (
                        <a className="btn btn-danger" onClick={removeMessage()}>Delete</a>
                    )}
                </div>
            </li>
        
        </div>
    );
}

export default MessageCard;
