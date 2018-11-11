import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import defaultProfileImg from '../images/default-profile-image.png';
import EditForm from '../containers/EditForm';

class MessageCard extends Component {
    state = {
      editOn: false
    }

    renderButtons = () => {
      return (
        <div>
          <a className="btn btn-danger" onClick={this.props.removeMessage()}>
            Delete
            </a> &nbsp; 
            <a className="btn btn-warning" onClick={() => this.setState({editOn: true})}>
            Edit
            </a> 
        </div>
      )
    }

    renderView = () => {
      if(this.state.editOn === true) {
        return <EditForm editOff={this.handleEditStateOnSave} text={this.props.text} id={this.props.mID} />
      }
      return this.renderButtons();
    }

    handleEditStateOnSave = () => {
      this.setState({
        editOn: false
      })
    }

    render() {
      return <div className="message-card">
        <li className="list-group-item">
          <img src={this.props.profileImageUrl || defaultProfileImg} alt={this.props.username} height="100" width="100" className="timeline-image" />
          <div className="message-area">
            <Link to="/">@{this.props.username} &nbsp; &nbsp;</Link>
            <span className="text-muted">
              <Moment className="text-muted" format="Do MMM YYYY">
                {this.props.date}
              </Moment>
            </span>
            {this.state.editOn === false &&
              <p>{this.props.text}</p>
            }
            {this.props.isCorrectUser && (this.renderView())}
          </div>
        </li>
      </div>;
    }
}

export default MessageCard;
