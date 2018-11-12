import React from 'react';
import defaultProfileImage from '../images/default-profile-image.png';

const UserAside = (props) => {
  const { profileImageUrl, username, isCorrectUser, profileAside } = props;


    return <aside className="col-sm-2">
        <div className="panel panel-default">
          <div className="panel-body">
          <img src={profileImageUrl || defaultProfileImage} alt={username} className="img-thumbnail" width="200" height="200" />
            <p>{username}</p>
          </div>
        </div>
      </aside>;
}

export default UserAside;
