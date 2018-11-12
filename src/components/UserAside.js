import React from 'react';
import defaultProfileImage from '../images/default-profile-image.png';

const UserAside = (props) => {
  const { profileImageUrl, username, isCorrectUser, profileAside } = props;

  const renderEditPic = () => {
    if (profileAside && isCorrectUser === true){
      return (<a className="edit-pic" href="#">
                Edit Profile Picture
              </a>)
    }
  }

    return <aside className="col-sm-2">
        <div className="panel panel-default">
          <div className="panel-body">
          <img src={profileImageUrl || defaultProfileImage} alt={username} className="img-thumbnail" width="200" height="200" />
            <p>{username}</p>
            {renderEditPic()}
          </div>
        </div>
      </aside>;
}

export default UserAside;
