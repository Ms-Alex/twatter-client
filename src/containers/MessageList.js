import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messages';
import MessageCard from '../components/MessageCard';

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }

    render() {
        const { messages } = this.props;
        let messageList = messages.map( message => <MessageCard key={message._id} date={message.createdAt} text={message.text} username={message.user.username} profileImageUrl={message.user.profileImageUrl} />); 

        return (
            <div>
                {messageList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, { fetchMessages }) (MessageList);
